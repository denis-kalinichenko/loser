import {FC, useState, useEffect} from "react";
import {IItem} from "../../types/Cases";
import styles from "./Loser.module.css";
import {Selector} from "./components/Selector";
import Image from "next/image";

export interface ILoserProps {
    items: IItem[];
}

const shuffleArray = (inputArray: any[]): any[] => {
    const array = [...inputArray];
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export const Loser: FC<ILoserProps> = ({ items }) => {
    const [count, setCount] = useState<number>(1);
    const [box, setBox] = useState<IItem[]>([]);
    const [opened, setOpened] = useState<boolean>(false);

    useEffect(() => {
        const randomItems = shuffleArray([
            ...items,
            ...items.map(i => ({
                ...i,
                id: i.id + "2",
            })),
            ...items.map(i => ({
                ...i,
                id: i.id + "3",
            })),
        ]).slice(0, 99);
        setBox(randomItems);
    }, []);

    const open = async (): Promise<void> => {
        const result = await fetch("/api/open");
        if (result.ok) {
            const item = await result.json();
            console.log("item", item);
            setBox(prevState => prevState.map((prevItem, index) => {
                if (index === 95) {
                    return {
                        ...item,
                        id: item.id + "-opened"
                    };
                }

                return prevItem;
            }).slice(0, 99))
            setOpened(true);
        } else {
            alert("Please, try again.");
        }
    }

    return (
        <div className={styles.root}>
            <div className={styles.loser}>
                <div className={styles.innerContainer}>
                    <div className={!opened ? styles.wrapper : styles.wrapperOpened}>
                        {box.map(item => (
                            <div key={item.id} className={styles.item}>
                                <Image
                                    src={item.icon}
                                    width="384px"
                                    height="288px"
                                    layout="responsive"
                                    quality={10}
                                    priority
                                />
                                <span>{item.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className={styles.controls}>
                <Selector count={count} setCount={setCount} />
                <button className={styles.openButton} onClick={open} disabled={opened}>Open for $1.20</button>
            </div>
        </div>
    );
}

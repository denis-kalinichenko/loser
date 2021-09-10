import {FC} from "react";
import styles from "./Selector.module.css";

export interface ISelectorProps {
    count: number;
    setCount: (newValue: number) => void;
}

export const Selector: FC<ISelectorProps> = ({ count, setCount }) => (
    <div className={styles.selector} data-selectedindex={count}>
        {[1,2,3,4,5].map(n => (
            <button
                key={n}
                type="button"
                onClick={() => setCount(n)}
                className={count === n ? styles.active : ""}>{n}
            </button>
        ))}
    </div>
)

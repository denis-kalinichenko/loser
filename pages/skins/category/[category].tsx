import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head';
import Image from 'next/image';
import styles from './Category.module.css';
import { useRouter } from 'next/router';
import {IItem} from "../../../types/Cases";
import {Loser} from "../../../modules/Loser";

export interface ICategoryProps {
    items: IItem[];
}

const Category: NextPage<ICategoryProps> = ({ items = [] }) => {
    const router = useRouter();
    const { category = "" } = router.query;

    return (
        <div>
            <Head>
                <title>{category.toString().toUpperCase()} - Open the case and get the best CSGO skins</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 className={styles.heading1}>{category}</h1>
            <div className={styles.container}>
                <Loser items={items} />
            </div>
            <h2 className={styles.heading1}>CASES CONTENTS</h2>
            <ul className={styles.contents}>
                {items.map(item => (
                    <li key={item.id} className={styles.item}>
                        <Image src={item.icon} width="167px" height="129px"/>
                        <span className={styles.itemDescription}>
                            {item.title}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = [{
        params: { category: "milspec" }
    }];
    return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {
            items: JSON.parse('[{"id":"5334812ee09910c4f6ffd7d2e4e9eb4e","productID":2410,"url":"/skins/product/MP9-Hot-Rod","fullTitle":"MP9 | Hot Rod","title":"MP9 ","subtitle":" Hot Rod","icon":"https://cdn.key-drop.com/csgo_icons/66/663d8e73fd538127725705d0d752e694.png","color":"blue","pfPercent":0.01,"pf":[{"rarity":"FN","price":23.78,"intervalFrom":99991,"intervalTo":100000,"odds":0.01}]},{"id":"9db23e87ec7f3fec09de5217a54f9542","productID":11789,"url":"/skins/product/UMP-45-Blaze","fullTitle":"UMP-45 | Blaze","title":"UMP-45 ","subtitle":" Blaze","icon":"https://cdn.key-drop.com/csgo_icons/0e/0e3722e7f69dc17d8cc7d04f51ea7106.png","color":"blue","pfPercent":0.025,"pf":[{"rarity":"FN","price":16.12,"intervalFrom":99966,"intervalTo":99990,"odds":0.025}]},{"id":"7a7e306288b0f8e3d56c89925c014a13","productID":1991,"url":"/skins/product/MAC-10-Fade","fullTitle":"MAC-10 | Fade","title":"MAC-10 ","subtitle":" Fade","icon":"https://cdn.key-drop.com/csgo_icons/21/21ac19e6a0c6b2a2781dde8ae3301ab8.png","color":"blue","pfPercent":0.043,"pf":[{"rarity":"FN","price":13.72,"intervalFrom":99923,"intervalTo":99965,"odds":0.043}]},{"id":"bedd1450c1f9e9edea7c2211354f4abb","productID":1909,"url":"/skins/product/M4A4-Radiation-Hazard","fullTitle":"M4A4 | Radiation Hazard","title":"M4A4 ","subtitle":" Radiation Hazard","icon":"https://cdn.key-drop.com/csgo_icons/83/8320840e4c98d9317f87c3562a5da2be.png","color":"blue","pfPercent":0.055,"pf":[{"rarity":"BS","price":11.76,"intervalFrom":99868,"intervalTo":99922,"odds":0.055}]},{"id":"a83d0c27561564aab5e57f22dfb784aa","productID":3547,"url":"/skins/product/SSG-08-Detour","fullTitle":"SSG 08 | Detour","title":"SSG 08 ","subtitle":" Detour","icon":"https://cdn.key-drop.com/csgo_icons/8b/8b4d202fe9a1a3648ceb071091f144cb.png","color":"blue","pfPercent":0.106,"pf":[{"rarity":"MW","price":6.27,"intervalFrom":99838,"intervalTo":99867,"odds":0.03},{"rarity":"FT","price":5.11,"intervalFrom":99762,"intervalTo":99837,"odds":0.076}]},{"id":"c3ec86fe0c0cbfefb7f1d12d1783f753","productID":2030,"url":"/skins/product/MAC-10-Nuclear-Garden","fullTitle":"MAC-10 | Nuclear Garden","title":"MAC-10 ","subtitle":" Nuclear Garden","icon":"https://cdn.key-drop.com/csgo_icons/39/397609be1b2e9a373eb22cbc85663c43.png","color":"blue","pfPercent":0.106,"pf":[{"rarity":"MW","price":4.66,"intervalFrom":99697,"intervalTo":99761,"odds":0.065},{"rarity":"FT","price":3.27,"intervalFrom":99607,"intervalTo":99647,"odds":0.041}]},{"id":"e0f521f3ef1e3ce3de50b18edcf6cf4f","productID":11768,"url":"/skins/product/Tec-9-Toxic","fullTitle":"Tec-9 | Toxic","title":"Tec-9 ","subtitle":" Toxic","icon":"https://cdn.key-drop.com/csgo_icons/ce/ce50de29be98a346f2d359008a85b83e.png","color":"blue","pfPercent":0.141,"pf":[{"rarity":"FN","price":4.26,"intervalFrom":99648,"intervalTo":99696,"odds":0.049},{"rarity":"FT","price":1.93,"intervalFrom":99466,"intervalTo":99557,"odds":0.092}]},{"id":"0b872109baca008072f7e697f21a0980","productID":43,"url":"/skins/product/AK-47-Elite-Build","fullTitle":"AK-47 | Elite Build","title":"AK-47 ","subtitle":" Elite Build","icon":"https://cdn.key-drop.com/csgo_icons/2e/2ebf84f638ac9a1571a76e9496d606bc.png","color":"blue","pfPercent":0.079,"pf":[{"rarity":"MW","price":2.11,"intervalFrom":99558,"intervalTo":99606,"odds":0.049},{"rarity":"FT","price":1.41,"intervalFrom":99380,"intervalTo":99409,"odds":0.03}]},{"id":"a5f2b8c62df4c87b35e4af2c17731b34","productID":12002,"url":"/skins/product/USP-S-Torque","fullTitle":"USP-S | Torque","title":"USP-S ","subtitle":" Torque","icon":"https://cdn.key-drop.com/csgo_icons/6b/6bc5ab9c4cac1095dfb275909e6c12d4.png","color":"blue","pfPercent":0.129,"pf":[{"rarity":"FN","price":1.61,"intervalFrom":99410,"intervalTo":99465,"odds":0.056},{"rarity":"MW","price":1.29,"intervalFrom":99257,"intervalTo":99291,"odds":0.035},{"rarity":"FT","price":0.93,"intervalFrom":98740,"intervalTo":98777,"odds":0.038}]},{"id":"3a7be74d88161d43e61d792f3cba30a5","productID":145,"url":"/skins/product/AK-47-Uncharted","fullTitle":"AK-47 | Uncharted","title":"AK-47 ","subtitle":" Uncharted","icon":"https://cdn.key-drop.com/csgo_icons/c1/c1c2dc8b26822829e8493a61a4f0cd56.png","color":"blue","pfPercent":2.969,"pf":[{"rarity":"FN","price":1.34,"intervalFrom":99292,"intervalTo":99379,"odds":0.088},{"rarity":"MW","price":0.6,"intervalFrom":95287,"intervalTo":95554,"odds":0.268},{"rarity":"FT","price":0.43,"intervalFrom":86796,"intervalTo":89408,"odds":2.613}]},{"id":"8f01e62329524c224be4eeff3bd1eaa9","productID":3521,"url":"/skins/product/SSG-08-Acid-Fade","fullTitle":"SSG 08 | Acid Fade","title":"SSG 08 ","subtitle":" Acid Fade","icon":"https://cdn.key-drop.com/csgo_icons/0a/0af1d5834ae4205165d6411be9f986cf.png","color":"blue","pfPercent":0.049,"pf":[{"rarity":"FN","price":1.16,"intervalFrom":99208,"intervalTo":99256,"odds":0.049}]},{"id":"91a2c12a9c6aa4d0a9d92cb310beadbc","productID":1461,"url":"/skins/product/Glock-18-Blue-Fissure","fullTitle":"Glock-18 | Blue Fissure","title":"Glock-18 ","subtitle":" Blue Fissure","icon":"https://cdn.key-drop.com/csgo_icons/4d/4d57f005de77d2fdec8a89b997a2db7d.png","color":"blue","pfPercent":0.448,"pf":[{"rarity":"MW","price":1,"intervalFrom":99157,"intervalTo":99207,"odds":0.051},{"rarity":"FT","price":0.69,"intervalFrom":97685,"intervalTo":98081,"odds":0.397}]},{"id":"ed9163b85221ab629f11e88af8a8a2d2","productID":74389,"url":"/skins/product/Desert-Eagle-Blue-Ply","fullTitle":"Desert Eagle | Blue Ply","title":"Desert Eagle ","subtitle":" Blue Ply","icon":"https://cdn.key-drop.com/csgo_icons/54/54d46a8e9dcd1f4e96ef55666d066b13.png","color":"blue","pfPercent":5.451,"pf":[{"rarity":"FN","price":0.99,"intervalFrom":98778,"intervalTo":99156,"odds":0.379},{"rarity":"MW","price":0.25,"intervalFrom":64097,"intervalTo":65487,"odds":1.391},{"rarity":"FT","price":0.14,"intervalFrom":40640,"intervalTo":41823,"odds":1.184},{"rarity":"WW","price":0.12,"intervalFrom":22431,"intervalTo":23694,"odds":1.264},{"rarity":"BS","price":0.12,"intervalFrom":30787,"intervalTo":32019,"odds":1.233}]},{"id":"e7bfd13e7790a2fdb5764a949f8b3773","productID":3100,"url":"/skins/product/P90-Traction","fullTitle":"P90 | Traction","title":"P90 ","subtitle":" Traction","icon":"https://cdn.key-drop.com/csgo_icons/55/55f18abf5e25b409457278ff196c9fe6.png","color":"blue","pfPercent":4.31,"pf":[{"rarity":"FN","price":0.79,"intervalFrom":98082,"intervalTo":98739,"odds":0.658},{"rarity":"FT","price":0.12,"intervalFrom":18180,"intervalTo":19499,"odds":1.32},{"rarity":"BS","price":0.1,"intervalFrom":15848,"intervalTo":18179,"odds":2.332}]},{"id":"6278a157031fbcf26d8ea093022a02a5","productID":2268,"url":"/skins/product/MP7-Cirrus","fullTitle":"MP7 | Cirrus","title":"MP7 ","subtitle":" Cirrus","icon":"https://cdn.key-drop.com/csgo_icons/43/4358176f7ac074e7ccf8f034e5a19df3.png","color":"blue","pfPercent":4.713,"pf":[{"rarity":"FN","price":0.67,"intervalFrom":97429,"intervalTo":97684,"odds":0.256},{"rarity":"MW","price":0.28,"intervalFrom":65488,"intervalTo":66763,"odds":1.276},{"rarity":"BS","price":0.15,"intervalFrom":41824,"intervalTo":43585,"odds":1.762},{"rarity":"FT","price":0.13,"intervalFrom":34299,"intervalTo":35717,"odds":1.419}]},{"id":"fcb28a06e7aee68fdb7e8bd679d30289","productID":2088,"url":"/skins/product/MAC-10-Whitefish","fullTitle":"MAC-10 | Whitefish","title":"MAC-10 ","subtitle":" Whitefish","icon":"https://cdn.key-drop.com/csgo_icons/45/45fe4d31b45fbce947d84fb008ef7de0.png","color":"blue","pfPercent":5.142,"pf":[{"rarity":"FN","price":0.62,"intervalFrom":95555,"intervalTo":96627,"odds":1.073},{"rarity":"MW","price":0.21,"intervalFrom":58989,"intervalTo":60169,"odds":1.181},{"rarity":"FT","price":0.14,"intervalFrom":37144,"intervalTo":37590,"odds":0.447},{"rarity":"BS","price":0.13,"intervalFrom":32020,"intervalTo":33280,"odds":1.261},{"rarity":"WW","price":0.11,"intervalFrom":23695,"intervalTo":24874,"odds":1.18}]},{"id":"7e7d42799404638b11499d065bd224b8","productID":3027,"url":"/skins/product/P90-Facility-Negative","fullTitle":"P90 | Facility Negative","title":"P90 ","subtitle":" Facility Negative","icon":"https://cdn.key-drop.com/csgo_icons/23/233d14c6b8f1cd14adba753c0909aade.png","color":"blue","pfPercent":0.801,"pf":[{"rarity":"FN","price":0.62,"intervalFrom":96628,"intervalTo":97428,"odds":0.801}]},{"id":"9e731967e3c4416dfe8f83b8956b7a63","productID":1020,"url":"/skins/product/FAMAS-Decommissioned","fullTitle":"FAMAS | Decommissioned","title":"FAMAS ","subtitle":" Decommissioned","icon":"https://cdn.key-drop.com/csgo_icons/26/2676d823aabe24561714b48c6e5c31de.png","color":"blue","pfPercent":6.486,"pf":[{"rarity":"FN","price":0.59,"intervalFrom":95195,"intervalTo":95286,"odds":0.092},{"rarity":"MW","price":0.18,"intervalFrom":46280,"intervalTo":48124,"odds":1.845},{"rarity":"FT","price":0.14,"intervalFrom":35718,"intervalTo":37143,"odds":1.426},{"rarity":"BS","price":0.09,"intervalFrom":19500,"intervalTo":21236,"odds":1.737},{"rarity":"WW","price":0.09,"intervalFrom":27537,"intervalTo":28922,"odds":1.386}]},{"id":"115facdd5d6d599729f1bf27fa6df431","productID":1338,"url":"/skins/product/Galil-AR-Akoben","fullTitle":"Galil AR | Akoben","title":"Galil AR ","subtitle":" Akoben","icon":"https://cdn.key-drop.com/csgo_icons/f1/f1e047d99a5473817e8aaa6e9e8caa0f.png","color":"blue","pfPercent":3.612,"pf":[{"rarity":"FN","price":0.52,"intervalFrom":91705,"intervalTo":93259,"odds":1.555},{"rarity":"MW","price":0.21,"intervalFrom":57801,"intervalTo":58988,"odds":1.188},{"rarity":"FT","price":0.14,"intervalFrom":39275,"intervalTo":40143,"odds":0.869}]},{"id":"343e7c44d8363914ddf268b3e84e3928","productID":76624,"url":"/skins/product/SSG-08-Mainframe-001","fullTitle":"SSG 08 | Mainframe 001","title":"SSG 08 ","subtitle":" Mainframe 001","icon":"https://cdn.key-drop.com/csgo_icons/f3/f382690e70e36ba8dcd1ce963dc903ce.png","color":"blue","pfPercent":6.439,"pf":[{"rarity":"FN","price":0.52,"intervalFrom":93260,"intervalTo":93621,"odds":0.362},{"rarity":"MW","price":0.12,"intervalFrom":28923,"intervalTo":30786,"odds":1.864},{"rarity":"BS","price":0.08,"intervalFrom":1,"intervalTo":1068,"odds":1.068},{"rarity":"FT","price":0.08,"intervalFrom":3652,"intervalTo":4878,"odds":1.227},{"rarity":"WW","price":0.07,"intervalFrom":1069,"intervalTo":2986,"odds":1.918}]},{"id":"e0589e9efc6511a4d323006e11fa4a40","productID":2951,"url":"/skins/product/P250-Valence","fullTitle":"P250 | Valence","title":"P250 ","subtitle":" Valence","icon":"https://cdn.key-drop.com/csgo_icons/46/466120e8402742eda83217f922c89427.png","color":"blue","pfPercent":3.844,"pf":[{"rarity":"FN","price":0.52,"intervalFrom":93622,"intervalTo":95194,"odds":1.573},{"rarity":"MW","price":0.18,"intervalFrom":48125,"intervalTo":49629,"odds":1.505},{"rarity":"FT","price":0.1,"intervalFrom":15082,"intervalTo":15847,"odds":0.766}]},{"id":"968cf83eebfee36adab016a63d2364f9","productID":2301,"url":"/skins/product/MP7-Mischief","fullTitle":"MP7 | Mischief","title":"MP7 ","subtitle":" Mischief","icon":"https://cdn.key-drop.com/csgo_icons/72/72b17a55bfa5b5b11c584de0b6baa8f9.png","color":"blue","pfPercent":6.039,"pf":[{"rarity":"MW","price":0.48,"intervalFrom":89409,"intervalTo":91704,"odds":2.296},{"rarity":"WW","price":0.2,"intervalFrom":54680,"intervalTo":55728,"odds":1.049},{"rarity":"FT","price":0.18,"intervalFrom":44638,"intervalTo":46279,"odds":1.642},{"rarity":"BS","price":0.17,"intervalFrom":43586,"intervalTo":44637,"odds":1.052}]},{"id":"06fe6e69c7d560920745000c8ac731d9","productID":3060,"url":"/skins/product/P90-Off-World","fullTitle":"P90 | Off World","title":"P90 ","subtitle":" Off World","icon":"https://cdn.key-drop.com/csgo_icons/08/08e1d2c844349f07e93fb7869e6ac9a0.png","color":"blue","pfPercent":3.478,"pf":[{"rarity":"FN","price":0.42,"intervalFrom":80779,"intervalTo":83335,"odds":2.557},{"rarity":"MW","price":0.2,"intervalFrom":57361,"intervalTo":57800,"odds":0.44},{"rarity":"FT","price":0.12,"intervalFrom":27056,"intervalTo":27536,"odds":0.481}]},{"id":"61965cb4fce95353dc09e030d2779560","productID":1889,"url":"/skins/product/M4A4-Magnesium","fullTitle":"M4A4 | Magnesium","title":"M4A4 ","subtitle":" Magnesium","icon":"https://cdn.key-drop.com/csgo_icons/b0/b0a3b4f4eaff2002de26e417f403097c.png","color":"blue","pfPercent":5.409,"pf":[{"rarity":"MW","price":0.38,"intervalFrom":77357,"intervalTo":80778,"odds":3.422},{"rarity":"FT","price":0.14,"intervalFrom":40144,"intervalTo":40639,"odds":0.496},{"rarity":"WW","price":0.09,"intervalFrom":9718,"intervalTo":10543,"odds":0.826},{"rarity":"BS","price":0.08,"intervalFrom":2987,"intervalTo":3651,"odds":0.665}]},{"id":"556e5350f7f4d32e86a2b8c3832bae43","productID":2956,"url":"/skins/product/P250-Verdigris","fullTitle":"P250 | Verdigris","title":"P250 ","subtitle":" Verdigris","icon":"https://cdn.key-drop.com/csgo_icons/6d/6d5aab0d0d776cb03e96ea0b1aa3b0da.png","color":"blue","pfPercent":4.867,"pf":[{"rarity":"FN","price":0.37,"intervalFrom":74844,"intervalTo":77356,"odds":2.513},{"rarity":"MW","price":0.19,"intervalFrom":51139,"intervalTo":52040,"odds":0.902},{"rarity":"FT","price":0.12,"intervalFrom":25604,"intervalTo":27055,"odds":1.452}]},{"id":"37183624491c8bcd9034aced82101ddd","productID":1010,"url":"/skins/product/FAMAS-Crypsis","fullTitle":"FAMAS | Crypsis","title":"FAMAS ","subtitle":" Crypsis","icon":"https://cdn.key-drop.com/csgo_icons/54/540d91ea562ca50c8c5cc3264890dfdf.png","color":"blue","pfPercent":4.591,"pf":[{"rarity":"FN","price":0.37,"intervalFrom":83336,"intervalTo":86795,"odds":3.46},{"rarity":"MW","price":0.19,"intervalFrom":52041,"intervalTo":52275,"odds":0.235},{"rarity":"FT","price":0.12,"intervalFrom":38379,"intervalTo":39274,"odds":0.896}]},{"id":"3c62fca5f592b9078a6fa8ed2804b262","productID":2378,"url":"/skins/product/MP9-Capillary","fullTitle":"MP9 | Capillary","title":"MP9 ","subtitle":" Capillary","icon":"https://cdn.key-drop.com/csgo_icons/0e/0e61595cd194dec9856b403314c9ac5b.png","color":"blue","pfPercent":4.18,"pf":[{"rarity":"FN","price":0.32,"intervalFrom":72164,"intervalTo":74843,"odds":2.68},{"rarity":"MW","price":0.21,"intervalFrom":56649,"intervalTo":57360,"odds":0.712},{"rarity":"FT","price":0.14,"intervalFrom":37591,"intervalTo":38378,"odds":0.788}]},{"id":"650b1515c77a72a029f6e83f6d5f3c38","productID":76620,"url":"/skins/product/PP-Bizon-Runic","fullTitle":"PP-Bizon | Runic","title":"PP-Bizon ","subtitle":" Runic","icon":"https://cdn.key-drop.com/csgo_icons/7c/7c7d33b309c4674fcffa02d81fe17f22.png","color":"blue","pfPercent":3.322,"pf":[{"rarity":"FN","price":0.3,"intervalFrom":67378,"intervalTo":69729,"odds":2.352},{"rarity":"MW","price":0.08,"intervalFrom":5873,"intervalTo":6842,"odds":0.97}]},{"id":"47f95fb1a6b3ca892944d8479c026e75","productID":3612,"url":"/skins/product/Sawed-Off-Black-Sand","fullTitle":"Sawed-Off | Black Sand","title":"Sawed-Off ","subtitle":" Black Sand","icon":"https://cdn.key-drop.com/csgo_icons/f2/f2a4d4e7041c3b10f5a91cb7f6f7a3e2.png","color":"blue","pfPercent":3.555,"pf":[{"rarity":"FN","price":0.29,"intervalFrom":69730,"intervalTo":72163,"odds":2.434},{"rarity":"MW","price":0.1,"intervalFrom":10544,"intervalTo":11664,"odds":1.121}]},{"id":"664d2cef17a40483bb291210031d143f","productID":76671,"url":"/skins/product/P90-Freight","fullTitle":"P90 | Freight","title":"P90 ","subtitle":" Freight","icon":"https://cdn.key-drop.com/csgo_icons/4b/4b8b245334e4461bc03acaac7827dd4b.png","color":"blue","pfPercent":1.343,"pf":[{"rarity":"FN","price":0.28,"intervalFrom":66764,"intervalTo":67377,"odds":0.614},{"rarity":"MW","price":0.11,"intervalFrom":24875,"intervalTo":25603,"odds":0.729}]},{"id":"d5dc96d01079ca26887786bab8dfb8cb","productID":1525,"url":"/skins/product/Glock-18-Oxide-Blaze","fullTitle":"Glock-18 | Oxide Blaze","title":"Glock-18 ","subtitle":" Oxide Blaze","icon":"https://cdn.key-drop.com/csgo_icons/fb/fb24b0b8fafec89ce990a2fd8a934277.png","color":"blue","pfPercent":2.967,"pf":[{"rarity":"FN","price":0.22,"intervalFrom":62850,"intervalTo":64096,"odds":1.247},{"rarity":"MW","price":0.09,"intervalFrom":7998,"intervalTo":9717,"odds":1.72}]},{"id":"c6bb37afb0e551a0147b46415fc430cb","productID":76590,"url":"/skins/product/Negev-Ultralight","fullTitle":"Negev | Ultralight","title":"Negev ","subtitle":" Ultralight","icon":"https://cdn.key-drop.com/csgo_icons/45/4591b51db830837a873f6043908e1317.png","color":"blue","pfPercent":3.918,"pf":[{"rarity":"FN","price":0.21,"intervalFrom":60170,"intervalTo":62849,"odds":2.68},{"rarity":"MW","price":0.08,"intervalFrom":13844,"intervalTo":15081,"odds":1.238}]},{"id":"2b3ecd38de96f6aa551957843aa53481","productID":2690,"url":"/skins/product/Nova-Wood-Fired","fullTitle":"Nova | Wood Fired","title":"Nova ","subtitle":" Wood Fired","icon":"https://cdn.key-drop.com/csgo_icons/80/807d85950693ab494232474a2581be68.png","color":"blue","pfPercent":4.583,"pf":[{"rarity":"FN","price":0.2,"intervalFrom":52276,"intervalTo":54679,"odds":2.404},{"rarity":"MW","price":0.09,"intervalFrom":11665,"intervalTo":13843,"odds":2.179}]},{"id":"d79089a6ad62fc46bfee8623126e0eff","productID":12103,"url":"/skins/product/XM1014-Slipstream","fullTitle":"XM1014 | Slipstream","title":"XM1014 ","subtitle":" Slipstream","icon":"https://cdn.key-drop.com/csgo_icons/e1/e1d9a760f3f0ef811481d3569d698bba.png","color":"blue","pfPercent":2.114,"pf":[{"rarity":"FN","price":0.2,"intervalFrom":55729,"intervalTo":56648,"odds":0.92},{"rarity":"MW","price":0.11,"intervalFrom":21237,"intervalTo":22430,"odds":1.194}]},{"id":"64324633497c02b5bb9ee989cb465689","productID":76613,"url":"/skins/product/P250-Cassette","fullTitle":"P250 | Cassette","title":"P250 ","subtitle":" Cassette","icon":"https://cdn.key-drop.com/csgo_icons/dc/dc5f9dd62fe0e6a9e813c025f1cb818c.png","color":"blue","pfPercent":1.155,"pf":[{"rarity":"MW","price":0.09,"intervalFrom":6843,"intervalTo":7997,"odds":1.155}]},{"id":"cc3a1f1820e606f79f2b9388fd85663c","productID":1892,"url":"/skins/product/M4A4-Mainframe","fullTitle":"M4A4 | Mainframe","title":"M4A4 ","subtitle":" Mainframe","icon":"https://cdn.key-drop.com/csgo_icons/0f/0f2379e1dcb8a15ba14601c011d040cd.png","color":"blue","pfPercent":3.521,"pf":[{"rarity":"FN","price":0.19,"intervalFrom":49630,"intervalTo":51138,"odds":1.509},{"rarity":"MW","price":0.12,"intervalFrom":33281,"intervalTo":34298,"odds":1.018},{"rarity":"FT","price":0.08,"intervalFrom":4879,"intervalTo":5872,"odds":0.994}]}]')
        }
    }
}

export default Category;

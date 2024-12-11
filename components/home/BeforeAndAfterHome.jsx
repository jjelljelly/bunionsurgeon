import Image from "next/image";
import style from "./BeforeAndAfterHome.module.css";
import { useState, useEffect } from "react"
import Link from "next/link";

export function BeforeAndAfterHome({ images }) {

    const [timeline, setTimeline] = useState(0);
    const [limit, setLimit] = useState();

    useEffect(() => {
        setLimit(window.screen.width < 700 ? 1 : 3);
    }, []);

    return (
        <div className={style.baaCont}>
            <h2>Before and After Bunion Surgery Images</h2>
            <div className={style.arrowCont}>
                <button
                    onClick={() => setTimeline(timeline - 1)}
                    className={timeline === 0 ? style.button : style.buttonVis}
                    disabled={timeline === 0}
                >
                    &#8592;
                </button>
                <hr className={style.line}></hr>
                <button
                    onClick={() => setTimeline(timeline + 1)}
                    className={
                        timeline === images.length - limit
                            ? style.button
                            : style.buttonVis
                    }
                    disabled={timeline === images.length - limit}
                >
                    &#8594;
                </button>
            </div>
            <div className={style.cardCont}>
                {images
                    .filter((filterItem, idx) => idx >= timeline && idx < timeline + limit)
                    .map((item) => (
                        <div className={style.card} key={item.fields.beforeImage.fields.file.url}>
                            <div>
                                <div className={style.twoImages}>
                                    <div className={style.imageCont}>
                                        <Image
                                            src={"https:" + item.fields.beforeImage.fields.file.url}
                                            alt={item.fields.beforeAlt}
                                            fill
                                            className={style.image}
                                        />
                                    </div>
                                    <div className={style.imageCont}>
                                        <Image
                                            src={"https:" + item.fields.afterImage.fields.file.url}
                                            alt={item.fields.afterAlt}
                                            fill
                                            className={style.image}
                                        />
                                    </div>
                                </div>
                                <h3>{item.fields.imageDescription}</h3>
                            </div>
                        </div>
                    ))}
            </div>
            <Link href={"https://www.bunionsurgeon.co.uk/before-after-gallery"}>
                <h4>View more before and after images</h4>
            </Link>
        </div>
    );
}

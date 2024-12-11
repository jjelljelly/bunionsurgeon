import Image from "next/image";
import style from "./BeforeAndAfterCard.module.css";
import { Modal } from "./Modal";
import { useState } from "react";

export function BeforeAndAfterCard({ images }) {
  const [item, setItem] = useState(false);
  const [idx, setIdx] = useState();

  return (
    <>
      <div className={style.cardCont}>
        {images.map((item, idx) => (
          <div className={style.flipCard}>
            <div className={style.wrapper} key={item.sys.id}>
              <div
                className={style.flipCardFront}
                onClick={() => {
                  if (window.screen.width > 1200) {
                    setItem(item);
                    setIdx(idx);
                  }
                }}
              >
                <div className={style.twoImages}>
                  <div className={style.imageCont}>
                    <Image
                      src={"https:" + item.fields.beforeImage.fields.file.url}
                      alt={item.fields.beforeAlt}
                      fill
                      objectFit="contain"
                      className={style.image}
                    />
                  </div>
                  <div className={style.imageCont}>
                    <Image
                      src={"https:" + item.fields.afterImage.fields.file.url}
                      alt={item.fields.afterAlt}
                      fill
                      objectFit="contain"
                      className={style.image}
                    />
                  </div>
                </div>
                <h3>{item.fields.imageDescription}</h3>
              </div>
              <div
                className={style.flipCardBack}
                onClick={() => {
                  if (window.screen.width > 1200) {
                    setItem(item);
                    setIdx(idx);
                  }
                }}
              >
                <p>Click to Enlarge</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal
        visible={Boolean(item)}
        setItem={setItem}
        items={images}
        idx={idx}
        setIdx={setIdx}
      >
        {Boolean(item) && (
          <div className={style.enlargeWrapper}>
            <div className={style.twoImagesEnlarge}>
              <div className={style.imageCont}>
                <Image
                  src={"https:" + item?.fields.beforeImage.fields.file.url}
                  alt={item?.fields.beforeAlt}
                  fill
                  sizes={'(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
                  className={style.image}
                />
              </div>
              <div className={style.imageCont}>
                <Image
                  src={"https:" + item?.fields.afterImage.fields.file.url}
                  alt={item?.fields.afterAlt}
                  sizes={'(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
                  fill
                  className={style.image}
                />
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}

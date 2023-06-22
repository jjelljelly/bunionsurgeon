import style from "./Blog.module.css";
import Image from "next/image";
import Link from "next/link";
import { getSlug } from "../../lib/utils";

export function Blog({ blogs }) {
  return (
    <>
      <div className={style.blogPageCont}>
        {blogs.map((item) => (
          <Link
            href={"/blog/" + getSlug(item.fields.blogTitle)}
            key={item.sys.id}
            className={style.container}
          >
            <div className={style.cardCont}>
              <h2>{item.fields.blogTitle}</h2>
              <p>Date published: {item?.fields?.dateBlogPublished}</p>
              <p>{item?.fields?.metaData?.slice(0, 60)}...</p>
              <div className={style.imageCont}>
                <Image
                  src={"https:" + item.fields.cardImage.fields.file.url}
                  fill
                  alt={item.fields.cardImage.fields.description}
                  style={{
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

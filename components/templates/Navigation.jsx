import styling from "./Navigation.module.css";
import { useState } from "react";
import Link from "next/link";

const navObjects = [
  {
    title: "Home",
    subMenu: false,
    link: "/",
  },
  {
    title: "About us",
    subMenu: false,
    link: "/about",
  },
  {
    title: "Surgery",
    subMenu: true,
    subMenuItems: [
      {
        subMenuTitle: "Surgery",
        subMenuLink: "/surgery",
      },
      {
        subMenuTitle: "Minimally Invasive Keyhole Bunion Surgery",
        subMenuLink: "/surgeries/minimally-invasive-keyhole-bunion-surgery",
      },
      {
        subMenuTitle: "Scarf and Akin Osteotomy",
        subMenuLink: "/surgeries/scarf-and-akin-osteotomy",
      },
      {
        subMenuTitle: "Lapidus Procedure",
        subMenuLink: "/surgeries/lapidus-fusion-procedure",
      },
      {
        subMenuTitle: "Tailor's Bunion procedure",
        subMenuLink: "/surgeries/tailors-bunion-correction",
      },
    ],
  },
  {
    title: "Pricing",
    subMenu: false,
    link: "/pricing",
  },
  {
    title: "Gallery",
    subMenu: false,
    link: "/before-after-gallery",
  },
  {
    title: "Get in touch",
    subMenu: false,
    link: "/getintouch",
  },
  {
    title: "Blogs",
    subMenu: false,
    link: "/blog",
  },
  {
    title: "Book online",
    subMenu: false,
    link: "https://bookonline.bunionsurgeon.co.uk/",
  },
];

export function Navigation() {
  const [dropDown, setDropDown] = useState(false);

  return (
    <>
      <nav className={styling.navWrap}>
        <ul className={styling.navList}>
          {navObjects.map((item) => {
            return (
              <li
                key={item.title}
                className={styling.navItem}
                onClick={() => setDropDown(dropDown ? false : item.subMenu)}
              >
                {item?.link ? (
                  <Link href={item?.link} scroll={true}>
                    {item.title}
                  </Link>
                ) : (
                  <a style={{ cursor: "pointer" }}>{item.title}</a>
                )}
                {dropDown && (
                  <ul className={styling.dropMenu}>
                    {item.subMenuItems?.map((dropItem) => {
                      return (
                        <li
                          key={dropItem.subMenuTitle}
                          className={styling.dropItem}
                        >
                          <Link href={dropItem.subMenuLink ?? ""} scroll={true}>
                            {dropItem.subMenuTitle}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

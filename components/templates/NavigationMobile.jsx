import styling from "./NavigationMobile.module.css";
import { useState } from "react";
import { BurgerBar } from "./BurgerBar";
import Link from "next/link";

const navObjects = [
  {
    title: "Home",
    subMenu: false,
    link: "/",
  },
  {
    title: "About Mr Kaser Nazir - The Surgeon",
    subMenu: false,
    link: "/about",
  },
  {
    title: "Surgery",
    subMenu: "true1",
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
    title: "Bunion Information",
    subMenu: "true2",
    subMenuItems: [
      {
        subMenuTitle: "Bunion Treatment",
        subMenuLink: "/information/bunion-treatment",
      },
      {
        subMenuTitle: "Bunion Surgeon",
        subMenuLink: "/information/bunion-surgeon",
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
];

export function NavigationMobile() {
  const [responsive, setResponsive] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  return (
    <>
      <nav className={responsive ? styling.responsive : styling.navWrap}>
        <ul className={styling.navList}>
          {navObjects.map((item) => {
            return (
              <li
                key={item.title}
                className={styling.navItem}
                onClick={() => setDropDown(dropDown === item.subMenu ? false : item.subMenu)}
              >
                {item?.link ? (
                  <Link href={item?.link} scroll={true}>
                    {item.title}
                  </Link>
                ) : (
                  <a style={{ cursor: "pointer" }} href="#">
                    {item.title}
                  </a>
                )}
                {(item.title === "Surgery" && dropDown === 'true1') && (
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
                {(item.title === "Bunion Information" && dropDown === 'true2') && (
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
      <BurgerBar responsive={responsive} setResponsive={setResponsive} />
    </>
  );
}

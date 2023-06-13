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
        subMenuTitle: "Minimally Invase Bunion Surgery",
        subMenuLink: "/surgeries/minimally-invasive",
      },
      {
        subMenuTitle: "Scarf and Akin Osteotomy",
        subMenuLink: "/surgeries/scarf-akin",
      },
      {
        subMenuTitle: "Lapidus Procedure",
        subMenuLink: "/surgeries/lapidus",
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
    link: "/gallery",
  },
  {
    title: "Get in touch",
    subMenu: false,
    link: "/getintouch",
  },
  {
    title: "Book online",
    subMenu: false,
    link: "https://bookonline.bunionsurgeon.co.uk/",
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
                onClick={() => setDropDown(dropDown ? false : item.subMenu)}
              >
                <Link href={item?.link ?? ""}>{item.title}</Link>
                {dropDown && (
                  <ul className={styling.dropMenu}>
                    {item.subMenuItems?.map((dropItem) => {
                      return (
                        <li
                          key={dropItem.subMenuTitle}
                          className={styling.dropItem}
                        >
                          <Link href={dropItem.subMenuLink ?? ""}>
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

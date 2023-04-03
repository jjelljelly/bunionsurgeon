import styling from "./Navigation.module.css";
import { useState } from "react";
import { BurgerBar } from "./BurgerBar";
import Link from "next/link";

const navObjects = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About us",
    link: "/about",
  },
  {
    title: "Surgery",
    link: "/surgery",
  },
  {
    title: "Pricing",
    link: "/pricing",
  },
  {
    title: "Gallery",
    link: "/gallery",
  },
  {
    title: "Get in touch",
    link: "/getintouch",
  },
  {
    title: "Book online",
  },
];

export function Navigation() {
  const [responsive, setResponsive] = useState(false);

  return (
    <>
      <nav className={responsive ? styling.responsive : styling.navWrap}>
        {/* <ul className={responsive ? styling.responsive : styling.navList}> */}
        <ul className={styling.navList}>
          {navObjects.map((item) => {
            return (
              <li key={item.title} className={styling.navItem}>
                <Link href={item?.link ?? ""}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <BurgerBar responsive={responsive} setResponsive={setResponsive} />
    </>
  );
}

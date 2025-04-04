import { TelephoneSvg } from "../svg/TelephoneSvg";
import style from "./ContactDetails.module.css";
import Form from "./Form";
import Link from "next/link";

export function ContactDetails() {
  return (
    <div className={style.contactWrapper}>
      <div className={style.howContact}>
        <button className={style.contact}>
          <Link href="tel:+442074594326">
            <h2 className={style.title}>Call us</h2>
            <p>+44207 459 4326</p>
          </Link>
        </button>
        <button className={style.contact}>
          <Link href="mailto:admin@bunionsurgeon.co.uk">
            <h2 className={style.title}>Email us</h2>
            <p>admin@bunionsurgeon.co.uk</p>
          </Link>
        </button>
        <Link href={"https://bookonline.bunionsurgeon.co.uk/"}
          target="_blank"
          className={style.contact}>
          <button>
            Book online
          </button>
        </Link>
        <div className={style.contact}>
          <TelephoneSvg />
        </div>
      </div>
      <div className={style.textCont}>
        <h2 className={style.header}>Request an Appointment</h2>
        <Form />
      </div>
    </div>
  );
}

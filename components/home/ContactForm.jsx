import Form from "../templates/Form";
import style from "./ContactForm.module.css";
import { TelephoneSvg } from "../svg/TelephoneSvg";

export function ContactForm() {
  return (
    <div className={style.mainContainer}>
      <div className={style.secContainer}>
        <h2>Do you have any questions?</h2>
        <p className={style.text}>
          Contact our team who can assist with queries you have regarding bunion
          surgery pricing, what procedure may be suggested to correct your
          bunion and arranging your consultation and X-ray.
        </p>
        <div className={style.telImage}>
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

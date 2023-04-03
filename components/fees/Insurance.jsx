import style from "./Insurance.module.css";
import { useState } from "react";

export function Insurance({ visible }) {
  if (visible === "insured") {
    return (
      <div className={style.container}>
        <h2>Medical Insurance</h2>
        <p>Mr Kaser Nazir is covered by all major insurance companies.</p>
        <p>
          Contact your insurance provider prior to your consultation to
          authorise a consultation with Mr Kaser Nazir and X-rays at Harley
          Street Specialist Hospital.
        </p>
        <p>
          We require your insurance company name, policy/ membership number and
          authorisation code in order to invoice directly.
        </p>
        <p>
          Following your consultation, our team will provide you with details in
          order to authorise your procedure.
        </p>
        <p>
          Should you have any questions beforehand, our team would be happy to
          assist.
        </p>
      </div>
    );
  }

  return null;
}

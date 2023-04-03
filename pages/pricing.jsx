import Head from "next/head";
import { BackgroundLines } from "../components/home/BackgroundLines";
import { SurgeryFees } from "../components/fees/SurgeryFees";
import { Layout } from "../components/templates/Layout";
import style from "./Pricing.module.css";
import { useState } from "react";
import { Insurance } from "../components/fees/Insurance";

export default function Pricing() {
  const [visible, setVisible] = useState();
  return (
    <>
      <Head />
      <Layout>
        <div className={style.headerSec}>
          <BackgroundLines />
          <h1>Pricing Information</h1>
          <p>
            Pricing of bunion surgery can vary depending on the severity of your
            bunion and your particular requirements. Here you will find typical
            fees.
          </p>
        </div>
        <div className={style.buttonCont}>
          <div>
            <button
              className={style.button}
              onClick={() => setVisible("insured")}
            >
              Select if Insured
            </button>
          </div>
          <div>
            <button
              className={style.button}
              onClick={() => setVisible("selfFunding")}
            >
              Select if Self-funding
            </button>
          </div>
        </div>
        <Insurance visible={visible} />
        <SurgeryFees visible={visible} />
      </Layout>
    </>
  );
}

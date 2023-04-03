import Head from "next/head";
import { Layout } from "../components/templates/Layout";
import style from "./surgery.module.css";
import { BackgroundLines } from "../components/home/BackgroundLines";
import Link from "next/link";
import { BunionInfo } from "../components/surgery/BunionInfo";
import { FrequentQuestions } from "../components/surgery/FrequentQuestions";

export default function Surgery() {
  return (
    <>
      <Head />
      <Layout>
        <div className={style.headerSec}>
          <BackgroundLines />
          <h1>Bunion Surgery</h1>
          <p>
            Although there are many types of bunion surgery, The Bunion Surgeon
            offers the most effective surgery to correct a bunion.
          </p>
          <p>
            The first step is to arrange a consultation and X-rays with our
            bunion specialist, Mr Kaser Nazir.
          </p>
        </div>
        <BunionInfo />
        <div className={style.surgeryCont}>
          <h2>Types of Bunion Surgery</h2>
          <div className={style.surgeryType}>
            <Link href={"/surgeries/minimally-invasive"} className={style.link}>
              <button className={style.surgery}>
                Minimally invasive bunion surgery
              </button>
            </Link>
            <Link href={"/surgeries/scarf-akin"} className={style.link}>
              <button className={style.surgery}>
                Scarf and akin osteotomy
              </button>
            </Link>
            <Link href={"/surgeries/lapidus"} className={style.link}>
              <button className={style.surgery}>Lapidus procedure</button>
            </Link>
          </div>
        </div>
        <FrequentQuestions />
      </Layout>
    </>
  );
}

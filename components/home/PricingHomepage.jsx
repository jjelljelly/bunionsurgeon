import style from "./PricingHomepage.module.css";
import { usePricingContext } from "../../context/pricingContext";
import { HomeFeesCont } from "./HomeFeesCont";
import Link from "next/link";

export function PricingHomepage({ }) {
  const data = usePricingContext({});
  return (
    <div className={style.pricingOuter}>
      <div className={style.title}>
        <h1>Cost of Minimally Invasive Bunion Surgery</h1>
      </div>
      <div className={style.infoCont}>
        <div className={style.info}>
          <p>
            We offer our patients a clear outline of expected fees following a
            consultation and X-rays. Here you can find our typical approximate
            procedure costs, excluding postoperative X-rays.
          </p>
          <p>Are you planning on using medical insurance?</p>

          <p>
            Mr Kaser Nazir is covered by all major insurance companies. Contact
            your insurance provider to request authorisation for a consultation
            and X-ray, our team will assist you with all required information to
            authorise the procedure following your appointment.
          </p>
          <p>
            Our bunion procedures are carried out at The Weymouth Street Hospital who have partnered with <Link href={"https://www.phoenixhospitalgroup.com/paying-for-your-care/finance-options/"}
              target="_blank">
              <b>Chrysallis Finance</b>
            </Link> to offer monthly payment plans.
          </p>
        </div>
        <div className={style.pricing}>
          <div className={style.price}>
            <h3 className={style.feeDescription}>Consultation</h3>
            <p>£250</p>
          </div>
          <div className={style.price}>
            <h3 className={style.feeDescription}>X-ray one foot</h3>
            <p>£160</p>
          </div>
          <div className={style.price}>
            <h3 className={style.feeDescription}>X-ray both feet</h3>
            <p>£264</p>
          </div>
          <HomeFeesCont
            unilatLocal={"£" + Math.round(data?.unilateralMinimalBunionLocal)}
            unilatSedation={
              "£" + Math.round(data?.unilateralMinimalBunionSedation)
            }
            bilatLocal={"£" + Math.round(data?.bilateralMinimalBunionLocal)}
            bilatSedation={
              "£" + Math.round(data?.bilateralMinimalBunionSedation)
            }
          />
        </div>
      </div>
    </div>
  );
}

import style from "./PricingHomepage.module.css";
import { usePricingContext } from "../../context/pricingContext";
import { FeesFlipCard } from "../templates/FeesFlipCard";
import { HomeFeesCont } from "./HomeFeesCont";

export function PricingHomepage({}) {
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
        </div>
        <div className={style.pricing}>
          <div className={style.price}>
            Consultation <br /> £200
          </div>
          <div className={style.price}>
            X-ray per foot <br /> £100
          </div>
          <div className={style.fetchedPrice}>
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
    </div>
  );
}

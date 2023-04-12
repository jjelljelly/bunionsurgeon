import style from "./SurgeryFees.module.css";
import { usePricingContext } from "../../context/pricingContext";
import { FeesCont } from "./FeesCont";

export function SurgeryFees({ visible }) {
  const data = usePricingContext();

  if (visible === "selfFunding") {
    return (
      <div>
        <div>
          <FeesCont
            header={"Minimally Invasive Bunion Surgery Fees"}
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
        <div>
          <FeesCont
            header={"Scarf and Akin Osteotomy Fees"}
            unilatLocal={"£" + Math.round(data?.unilateralScarfLocal)}
            unilatSedation={"£" + Math.round(data?.unilateralScarfSedation)}
            bilatLocal={"£" + Math.round(data?.bilateralScarfLocal)}
            bilatSedation={"£" + Math.round(data?.bilateralScarfSedation)}
          />
        </div>
        <div>
          <FeesCont
            header={"Lapidus Procedure Fees"}
            unilatLocal={"£" + Math.round(data?.unilateralLapidusLocal)}
            unilatSedation={"£" + Math.round(data?.unilateralLapidusSedation)}
            bilatLocal={"Unavailable"}
            bilatSedation={"Unavailable"}
          />
        </div>
        <div className={style.addInfo}>
          <p>
            Pricing does not include your initial consultation fee or imaging,
            such as X-rays.
          </p>
          <p>
            Following your consultation and X-ray with Mr Kaser Nazir we will
            provide a full breakdown of fees.
          </p>
        </div>
      </div>
    );
  }

  return null;
}

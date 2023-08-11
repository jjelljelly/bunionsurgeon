import { FeesFlipCard } from "../templates/FeesFlipCard";

export function HomeFeesCont({
  unilatLocal,
  unilatSedation,
  bilatLocal,
  bilatSedation,
}) {
  return (
    <>
      <FeesFlipCard
        feeType="One Foot"
        local={unilatLocal}
        sedation={unilatSedation}
      />
      <FeesFlipCard
        feeType="Both Feet"
        local={bilatLocal}
        sedation={bilatSedation}
      />
    </>
  );
}

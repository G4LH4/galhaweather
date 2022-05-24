import MainDiv from "../mainDiv";
import TitleText from "../titleText";

import LocationCards from "./locationCards";

const CardPickLocation = ({ data }) => {
  return (
    <MainDiv
      id={"card-pick-location"}
      props={
        <>
          <TitleText title={"Pick location"} />

          <LocationCards data={data} />
        </>
      }
    />
  );
};

export default CardPickLocation;

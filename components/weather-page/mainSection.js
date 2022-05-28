// Components
import CardToday from "./cardToday";
import SecondaryData from "../secondaryData/secondaryData";

const MainSection = ({ data }) => {
  return (
    <div id="main-section ">
      <CardToday data={data} />

      <SecondaryData data={data} />
    </div>
  );
};

export default MainSection;

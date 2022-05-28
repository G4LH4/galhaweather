import TitleText from "../titleText";
import LocationCards from "./locationCards";

const MainSection = () => {
  return (
    <div id="main-section-pl">
      <div className="flex flex-col p-5 mx-auto space-y-20 ">
        <TitleText title={"Pick location"} />

        <div>
          <input
            type={"text"}
            placeholder="🔍 Search"
            className="w-full p-2 text-white rounded bg-boxColor"
          />
        </div>

        <LocationCards />
      </div>
    </div>
  );
};

export default MainSection;

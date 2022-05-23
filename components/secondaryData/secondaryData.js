// Components
import SectionData from "./sectionData";

import feelsLikeIMG from "../../public/feels-like.png";
import humidityIMG from "../../public/humidity.png";
import heavyWindsIMG from "../../public/heavy-winds.png";

const SecondaryData = ({ humidity, feelslike_c, wind_kph }) => {
  return (
    <div
      id="secondary-data"
      className="flex justify-between p-3 mt-10 space-x-10 text-sm text-center "
    >
      <SectionData
        imgSrc={feelsLikeIMG}
        texth1={`${feelslike_c}°C`}
        texth3={"Feels like"}
      />
      <SectionData
        imgSrc={humidityIMG}
        texth1={`${humidity} %`}
        texth3={"Humidity"}
      />
      <SectionData
        imgSrc={heavyWindsIMG}
        texth1={`${wind_kph} km/h`}
        texth3={"Wind"}
      />
    </div>
  );
};

export default SecondaryData;

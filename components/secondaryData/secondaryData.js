// Components
import SectionData from "./sectionData";

import { useState, useEffect } from "react";

import feelsLikeIMG from "../../public/feels-like.png";
import humidityIMG from "../../public/humidity.png";
import heavyWindsIMG from "../../public/heavy-winds.png";

const SecondaryData = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (data) setIsLoading(false);
  }, [data]);

  return (
    <div
      id="secondary-data"
      className="flex justify-between p-3 mt-10 space-x-10 text-sm text-center "
    >
      <SectionData
        imgSrc={feelsLikeIMG}
        texth1={`${isLoading ? "Loading..." : data?.feelslike_c}°C`}
        texth3={"Feels like"}
      />
      <SectionData
        imgSrc={humidityIMG}
        texth1={`${isLoading ? "Loading..." : data?.humidity} %`}
        texth3={"Humidity"}
      />
      <SectionData
        imgSrc={heavyWindsIMG}
        texth1={`${isLoading ? "Loading..." : data?.wind_kph} km/h`}
        texth3={"Wind"}
      />
    </div>
  );
};

export default SecondaryData;

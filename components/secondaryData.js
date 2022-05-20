import Image from "next/image";
import { useState, useEffect } from "react";

import getNextDay from "../services/rapidApi/nextDay";

import feelsLikeIMG from "../public/feels-like.png";
import humidityIMG from "../public/humidity.png";
import heavyWindsIMG from "../public/heavy-winds.png";

// humidity, wind_kph, feelsLike
const SecondaryData = ({ humidity, feelslike_c, wind_kph }) => {
  const [itemClicked, setItemClicked] = useState(null);
  const [nextDayData, setNextDayData] = useState(null);

  useEffect(() => {
    getNextDay().then((data) => setNextDayData(data.forecast.forecastday[1]));
  }, []);

  console.log(nextDayData);
  return (
    <>
      <section className="grid items-center grid-flow-col grid-rows-1 px-4 mt-10">
        <h1 className="text-xl font-semibold text-secondaryColor">Today</h1>
        <h1>Tomorrow</h1>
        <h1>Next 7 days</h1>
      </section>
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
          texth1={`${humidity}%`}
          texth3={"Humidity"}
        />
        <SectionData
          imgSrc={heavyWindsIMG}
          texth1={`${wind_kph}km/h`}
          texth3={"Wind"}
        />
      </div>
    </>
  );
};

const SectionData = ({ imgSrc, texth1, texth3 }) => {
  return (
    <section className="justify-between p-2 bg-boxColor rounded-xl">
      <Image src={imgSrc} />
      <h1 className="text-xl">{texth1}</h1>
      <h3>{texth3}</h3>
    </section>
  );
};

export default SecondaryData;

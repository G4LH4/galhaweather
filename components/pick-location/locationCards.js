import Image from "next/image";

import useForecast from "../../hooks/useForecast";

// Examlpe img
import cloudyWeather from "../../public/cloudy-weather.png";

const LocationCards = () => {
  return (
    <div id="cards" className="grid grid-cols-2 gap-10 auto-rows-min ">
      <Card city={"Chicago"} bgColor={"secondaryColor"} />
      <Card city={"Paris"} />
      <Card city={"Buenos aires"} />
      <Card city={"California"} />
    </div>
  );
};

const Card = ({ city, bgColor }) => {
  return (
    <div
      id={`card-${city}`}
      className={`px-3 py-3 text-white ${
        bgColor ? `bg-${bgColor}` : "bg-boxColor"
      } rounded-xl `}
    >
      <div className="flex">
        <div className="flex-col">
          <h1>32°</h1>
          <h3 className="opacity-60">Cloudy</h3>
        </div>

        <Image src={cloudyWeather} />
      </div>
      <h1 className="mt-4 font-bold">{city}</h1>
    </div>
  );
};

export default LocationCards;

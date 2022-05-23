import Image from "next/image";

import mapPin from "../public/map-pin.svg";

// Temporal image
import lightningAndRain from "../public/lightning-and-rain.png";

const CardToday = ({ data, location }) => {
  return (
    <div
      initial={{ translateX: 100 }}
      animate={{ translateX: 0 }}
      transition={{ duration: 0.5 }}
      id="card-today"
      className="w-11/12 p-5 mx-auto font-semibold bg-boxColor rounded-3xl"
    >
      <section className="grid items-center justify-between grid-flow-col grid-rows-1">
        <h1 className="text-2xl ">Today</h1>
        <h4 className="text-sm font-light brightness-75">
          {data?.localtime.split("-").join("/")}
        </h4>
      </section>

      <section className="grid items-center grid-flow-col grid-rows-1 mt-10 gap-x-10 ">
        <h1 className="text-6xl">
          {data?.temp_c}
          <span className="text-3xl align-top text-secondaryColor">°C</span>
        </h1>

        <Image src={lightningAndRain} />
      </section>

      <footer className="flex items-center mt-10 space-x-2 font-light">
        <Image src={mapPin} height={30} width={30} />
        <h3>{location?.city}</h3>
      </footer>
    </div>
  );
};

export default CardToday;

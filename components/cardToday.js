import Image from "next/image";

import mapPin from "../public/map-pin.svg";

// Temporal image
import lightningAndRain from "../public/lightning-and-rain.png";

const CardToday = ({ data }) => {
  console.log(data);
  return (
    <div id="card-today" className="p-5 mx-auto space-y-12 font-semibold">
      <h1 className="text-3xl tracking-wide">Today's report</h1>

      <section
        id="imagen"
        className="grid w-7/12 grid-cols-1 mx-auto text-center space-y-7"
      >
        <Image
          src={lightningAndRain}
          className="bg-[url('../public/elipses.png')] bg-no-repeat "
        />

        <h1 className="text-2xl font-bold tracking-wide">
          {data?.condition.text}
        </h1>

        <h1 className="font-bold tracking-wide text-7xl">
          {data?.temp_c}
          <span className="text-secondaryColor">°</span>
        </h1>
      </section>
    </div>
  );
};

export default CardToday;

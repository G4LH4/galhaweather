import Image from "next/image";

import { useState, useEffect } from "react";

import MainDiv from "../mainDiv";
import TitleText from "../titleText";

// Temporal image
import lightningAndRain from "../../public/lightning-and-rain.png";
import showers from "../../public/showers.png";

const CardToday = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);
  // const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    if (data) {
      // setImageSrc(data.condition.icon);
      setIsLoading(false);
    }
  }, [data]);

  // console.log(imageSrc);
  return (
    <MainDiv
      id="card-today"
      addClass={"w-11/12 rounded-xl"}
      props={
        <>
          <section
            id="imagen"
            className="grid grid-cols-1 mx-auto text-center space-y-7"
          >
            <div className="w-9/12 mx-auto">
              <Image src={showers} />
            </div>

            <h1 className="text-2xl font-bold tracking-wide">
              {isLoading ? "Loading..." : data?.condition.text}
            </h1>

            <h1 className="font-bold tracking-wide text-7xl">
              {data?.temp_c}
              <span className="text-secondaryColor">°</span>
            </h1>
          </section>
        </>
      }
    />
  );
};

export default CardToday;

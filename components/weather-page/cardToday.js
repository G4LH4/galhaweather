import Image from "next/image";

import { useState, useEffect } from "react";

const axios = require("axios");

import MainDiv from "../mainDiv";

// Temporal image
import showers from "../../public/showers.png";

const CardToday = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (data) {
      setIsLoading(false);
    }
  }, [data]);

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
            <div className="mx-auto w-fit ">
              {/* <Image
                src={`https:${data?.condition?.icon}`}
                width={300}
                height={300}
              /> */}
              <Image src={showers} width={250} height={250} />
            </div>

            <h1 className="text-2xl font-bold tracking-wide">
              {isLoading ? "Loading..." : data?.condition.text}
            </h1>

            <h1 className="font-bold tracking-wide text-7xl">
              {isLoading ? "..." : Math.round(data?.temp_c)}
              <span className="absolute text-secondaryColor">°</span>
            </h1>
          </section>
        </>
      }
    />
  );
};

export default CardToday;

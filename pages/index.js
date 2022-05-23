import Image from "next/image";
import Link from "next/link";
import Head from "next/dist/shared/lib/head";

import { motion } from "framer-motion";

import cloudyWeather from "../public/cloudy-weather.png";

const Home = () => {
  return (
    <div
      id="land-page"
      className="flex w-screen h-screen text-white font-Inter bg-bgColor"
    >
      <Head>
        <title>Galha weather</title>
      </Head>

      <div className="w-11/12 m-auto text-center space-y-14">
        <Image
          src={cloudyWeather}
          className="bg-[url('../public/elipses.png')] bg-no-repeat"
        />
        <h1 className="text-5xl font-bold">Weather news & Feed</h1>

        <p className=" brightness-75">
          Get to know the weather maps and radar precipitation forecast.
        </p>

        <Link href="/weather">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-5 px-32 text-base rounded-xl bg-secondaryColor"
          >
            Get started
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

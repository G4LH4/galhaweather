import Image from "next/image";
import Link from "next/link";
import Head from "next/dist/shared/lib/head";

import { motion } from "framer-motion";

import cloudyWeather from "../public/cloudy-weather.png";

const Home = () => {
  return (
    <div
      id="land-page"
      className="flex w-screen h-screen font-mono text-white bg-bgColor"
    >
      <Head>
        <title>Galha weather</title>
      </Head>

      <div className="w-11/12 m-auto space-y-10 text-center">
        <Image src={cloudyWeather} />

        <h1 className="text-6xl">
          Weather <span className=" text-secondaryColor">News & Feed</span>
        </h1>

        <p className=" brightness-75">
          Duis accumsan placerant finibus. Sed fringilla nibh nmon nibgh congue
          preanetas praentra nono sapien.
        </p>

        <Link href="/weather">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-5 px-20 text-2xl font-bold text-black rounded-xl bg-secondaryColor"
          >
            Get start
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

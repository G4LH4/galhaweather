import Image from "next/image";
import { motion } from "framer-motion";

import CardPickLocation from "./cardPickLocation";

// Image
import mapPin from "../../public/map-pin.png";

const MainSection = ({ data }) => {
  return (
    <div id="main-section-pl">
      <CardPickLocation data={data} />

      <div className="flex p-5 mx-auto">
        <input
          type={"text"}
          placeholder="🔍 Search"
          className="p-2 rounded bg-boxColor"
        />

        <motion.button className="p-2 ml-4 align-middle rounded bg-boxColor">
          <Image src={mapPin} />
        </motion.button>
      </div>
    </div>
  );
};

export default MainSection;

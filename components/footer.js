import { motion } from "framer-motion";
import Image from "next/image";

import horizontalBar from "../public/horizontal-bar.png";

const Footer = () => {
  return (
    <motion.div
      id="footer"
      className="w-full mt-auto align-middle bg-boxColor"
      drag="y"
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      dragElastic={0.6}
      // onDragEnd={(event, info) => console.log(info.point.x, info.point.y)}
    >
      <div className="mx-auto w-fit">
        <Image src={horizontalBar} />
      </div>
    </motion.div>
  );
};

export default Footer;

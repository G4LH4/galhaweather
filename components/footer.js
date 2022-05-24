import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

// Images
import homeIcon from "../public/homeIcon.png";
import searchIcon from "../public/searchIcon.png";
import brujulaIcon from "../public/brujulaIcon.png";

const Footer = () => {
  return (
    <motion.div
      drag
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      id="footer"
      className="flex justify-between w-11/12 p-5 m-10 mx-auto h-max bottom-10 rounded-xl bg-boxColor"
    >
      <ImageIcon linkSrc={"weather"} src={homeIcon} />
      <ImageIcon
        addClass={"brightness-50"}
        linkSrc={"pick-location"}
        src={searchIcon}
      />
      <ImageIcon
        addClass={"brightness-50"}
        linkSrc={"pick-location"}
        src={brujulaIcon}
      />
    </motion.div>
  );
};

const ImageIcon = ({ linkSrc, src, addClass }) => {
  return (
    <Link href={linkSrc}>
      <Image
        src={src}
        width={30}
        height={30}
        className={`cursor-pointer ${addClass}`}
      />
    </Link>
  );
};

export default Footer;

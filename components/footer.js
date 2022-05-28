import Image from "next/image";
import Link from "next/link";

// Images
import homeIcon from "../public/homeIcon.png";
import searchIcon from "../public/searchIcon.png";
import brujulaIcon from "../public/brujulaIcon.png";

const Footer = () => {
  return (
    <div
      id="footer"
      className="flex justify-between w-11/12 p-5 m-10 mx-auto bg-boxColor rounded-xl"
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
    </div>
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

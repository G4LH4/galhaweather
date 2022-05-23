import Image from "next/image";

// Images
import homeIcon from "../public/homeIcon.png";
import searchIcon from "../public/searchIcon.png";
import brujulaIcon from "../public/brujulaIcon.png";

const Footer = () => {
  return (
    <div
      id="footer"
      className="flex justify-between w-11/12 p-2 mx-auto mt-8 mb-8 h-max bottom-10 rounded-xl bg-boxColor"
    >
      <ImageIcon src={homeIcon} />
      <ImageIcon src={searchIcon} />
      <ImageIcon src={brujulaIcon} />
    </div>
  );
};

const ImageIcon = ({ src }) => {
  return <Image src={src} width={40} height={40} className="cursor-pointer" />;
};

export default Footer;

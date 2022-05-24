import Image from "next/image";

import mapPin from "../public/map-pin.png";

import github from "../public/github.png";

const Header = ({ location }) => {
  return (
    <div id="header">
      <div
        id="container"
        className="grid items-center grid-flow-col grid-rows-1 p-5 tracking-wide justify-items-stretch"
      >
        <section id="theme" className="justify-self-start">
          <Image
            src={github}
            width={30}
            height={30}
            onClick={() =>
              window.open("https://github.com/G4LH4/galhaweather", "_blank")
            }
          />
        </section>
        <section id="location" className="flex space-x-2 justify-self-end">
          <Image src={mapPin} />
          <h1 className="text-white ">
            {location?.city}, {location?.country}
          </h1>
        </section>
      </div>
    </div>
  );
};

export default Header;

import Image from "next/image";

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
        <section id="location" className="justify-self-end">
          <h1>
            {location?.city}, {location?.country}
          </h1>
        </section>
      </div>
    </div>
  );
};

export default Header;

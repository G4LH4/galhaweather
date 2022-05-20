import Image from "next/image";

import github from "../public/github.png";

const Header = () => {
  return (
    <div id="header">
      <div
        id="container"
        className="grid items-center grid-flow-col grid-rows-1 p-5 justify-items-stretch"
      >
        <section id="theme" className="justify-self-start">
          <Image
            src={github}
            width={30}
            height={30}
            onClick={() => window.open("https://github.com/g4lh4", "_blank")}
          />
        </section>
        <section id="location" className="justify-self-end">
          Weather Forecast
        </section>
      </div>
    </div>
  );
};

export default Header;

import { useEffect, useState } from "react";

import getWeather from "../services/rapidApi/rapidApi";

import useGeoLocation from "../hooks/useGeoLocation";

// Components
import Header from "../components/header";
import MainSection from "../components/weather-page/MainSection";
import Footer from "../components/footer";

export default function Weather() {
  const [data, setData] = useState(null);

  const location = useGeoLocation();

  useEffect(() => {
    getWeather()
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex flex-col w-screen h-screen m-auto text-white font-Inter bg-bgColor">
      <section className="m-auto">
        <Header location={location} />

        <MainSection data={data} />

        <Footer />
      </section>
    </div>
  );
}

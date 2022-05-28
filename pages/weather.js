import { useEffect, useState } from "react";

import getWeather from "../services/rapidApi/rapidApi";

import useGeoLocation from "../hooks/useGeoLocation";

// Components
import Header from "../components/header";
import MainSection from "../components/weather-page/MainSection";

export default function Weather() {
  const [data, setData] = useState(null);

  const location = useGeoLocation();

  useEffect(() => {
    getWeather()
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex flex-col h-screen text-white font-Inter bg-bgColor">
      <Header location={location} />

      <section className="m-auto bg-bgColor">
        <MainSection data={data} />
      </section>
    </div>
  );
}

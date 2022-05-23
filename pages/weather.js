import { useEffect, useState } from "react";

import getWeather from "../services/rapidApi/rapidApi";

import useGeoLocation from "../hooks/useGeoLocation";

// Components
import Header from "../components/header";
import MainSection from "../components/MainSection";
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
    <div className="flex flex-col w-screen text-white h-max font-Inter bg-bgColor">
      <Header location={location} />

      <MainSection data={data} />

      <Footer />
    </div>
  );
}

import Header from "../components/header";

import useGeoLocation from "../hooks/useGeoLocation";

import { useState, useEffect } from "react";

import getWeather from "../services/rapidApi/rapidApi";

import MainSection from "../components/pick-location/mainSection";

const PickLocation = () => {
  const location = useGeoLocation();

  const [data, setData] = useState(null);

  useEffect(() => {
    getWeather()
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div id="pick-location" className="w-screen h-screen bg-bgColor">
      <Header location={location} />

      <MainSection data={data} />
    </div>
  );
};

export default PickLocation;

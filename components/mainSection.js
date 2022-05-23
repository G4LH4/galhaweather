import { useState, useEffect } from "react";

import getWeather from "../services/rapidApi/rapidApi";
import fetchIpInfo from "../services/ipInfo";

// Components
import CardToday from "./cardToday";
import SecondaryData from "./secondaryData/secondaryData";
import ForecastData from "./secondaryData/forecastData";

const MainSection = () => {
  const [data, setData] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    getWeather()
      .then((data) => setData(data))
      .catch((err) => console.log(err));

    fetchIpInfo().then((location) => setLocation(location));
  }, []);

  return (
    <div id="main-section">
      <CardToday data={data} location={location} />

      <SecondaryData
        humidity={data?.humidity}
        feelslike_c={data?.feelslike_c}
        wind_kph={data?.wind_kph}
      />

      <ForecastData data={data} />
    </div>
  );
};

export default MainSection;

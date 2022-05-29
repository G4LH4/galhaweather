import { useState, useEffect } from "react";
import axios from "axios";

export default async function useForecast(city) {
  const [forecast, setForecast] = useState([]);
  const [getCity, setCity] = useState(null);

  useEffect(() => {
    if (city) {
      setCity(city);
    }
  }, []);

  const options = {
    method: "GET",
    params: { q: getCity, days: "3" },
    headers: {
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      "X-RapidAPI-Key": "6d8f2fc086mshab9e50a3771f476p1c3e89jsned0e478d15f0",
    },
  };

  const url = "https://weatherapi-com.p.rapidapi.com/forecast.json";

  const fetchData = await fetch(url, options);
  const dataJson = await fetchData.json();

  // console.log(city);

  // useEffect(() => {
  //   (async () => {
  //     const options = {
  //       method: "GET",
  //       params: { days: "3" },
  //       headers: {
  //         "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  //         "X-RapidAPI-Key":
  //           "6d8f2fc086mshab9e50a3771f476p1c3e89jsned0e478d15f0",
  //       },
  //     };
  //     const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${getCity}`;

  //     const fetchUrl = await fetch(url, options);
  //     const dataJson = await fetchUrl.json();

  //     setForecast(dataJson.forecast);
  //   })();
  // }, [city]);

  // // console.log(forecast);
  // return forecast;
}

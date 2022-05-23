import fetchIpInfo from "../ipInfo";
import axios from "axios";

const getForecast = async () => {
  const getLocation = await fetchIpInfo();

  const options = {
    method: "GET",
    params: { days: "7" },
    headers: {
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      "X-RapidAPI-Key": "6d8f2fc086mshab9e50a3771f476p1c3e89jsned0e478d15f0",
    },
  };

  const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${getLocation.city}`;

  const fetchUrl = await axios.get(url, options);

  return await fetchUrl.data;
};

export default getForecast;

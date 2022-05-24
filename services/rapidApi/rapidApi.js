import fetchIpInfo from "../ipInfo";

const getWeather = async (location) => {
  let setLocation;

  if (!location) setLocation = await fetchIpInfo();

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      "X-RapidAPI-Key": "6d8f2fc086mshab9e50a3771f476p1c3e89jsned0e478d15f0",
    },
  };
  const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${setLocation.city}`;

  const fetchUrl = await fetch(url, options);
  const dataJson = await fetchUrl.json();

  const { name, localtime } = dataJson.location;
  const {
    temp_c,
    is_day,
    condition,
    wind_kph,
    wind_dir,
    humidity,
    cloud,
    feelslike_c,
  } = dataJson.current;

  return {
    name,
    localtime,
    temp_c,
    is_day,
    condition,
    wind_kph,
    wind_dir,
    humidity,
    cloud,
    feelslike_c,
  };
};

export default getWeather;

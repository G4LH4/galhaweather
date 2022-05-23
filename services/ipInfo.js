const fetchIpInfo = async () => {
  const fetchUrl = await fetch("https://ipinfo.io/json?token=28c645b0313b3a");
  const dataJson = await fetchUrl.json();

  const { city } = dataJson;

  return {
    city,
  };
};

export default fetchIpInfo;

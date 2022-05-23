import { useState, useEffect } from "react";

function useGeoLocation() {
  const [info, setInfo] = useState();
  useEffect(() => {
    fetch("https://ipinfo.io/json?token=28c645b0313b3a")
      .then((res) => res.json())
      .then((data) => {
        setInfo({ city: data?.city });
      });
  }, []);
  return info;
}
export default useGeoLocation;

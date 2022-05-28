import Header from "../components/header";

import useGeoLocation from "../hooks/useGeoLocation";

import MainSection from "../components/pick-location/mainSection";

const PickLocation = () => {
  const location = useGeoLocation();

  return (
    <div id="pick-location" className="w-screen h-screen bg-bgColor">
      <Header location={location} />

      <MainSection />
    </div>
  );
};

export default PickLocation;

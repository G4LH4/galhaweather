// Components
import CardToday from "./cardToday";
import SecondaryData from "./secondaryData/secondaryData";

const MainSection = ({ data }) => {
  return (
    <div id="main-section">
      <CardToday data={data} />

      <SecondaryData
        humidity={data?.humidity}
        feelslike_c={data?.feelslike_c}
        wind_kph={data?.wind_kph}
      />
    </div>
  );
};

export default MainSection;

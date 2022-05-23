import ForecastData from "./forecastData";

const TodayWeather = ({ forecastData }) => {
  return (
    <section className="grid items-center grid-flow-col grid-rows-1 px-4 mt-10">
      <h1 className="text-xl font-semibold text-secondaryColor">Today</h1>

      <ForecastData forecast={forecastData} />
    </section>
  );
};

export default TodayWeather;

const ForecastData = ({ data }) => {
  return (
    <div id="forecast-today" className="p-5 pt-10">
      <h1 className="text-2xl text-secondaryColor">Today</h1>
      {/* {data.map((hour) => {
          const { time, temp_c } = hour;
          <h1>
            {time} {temp_c}
          </h1>;
        })} */}
    </div>
  );
};

export default ForecastData;

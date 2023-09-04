import WeatherInfoDivType1 from "../WeatherInfoDiv/WeatherInfoDivType1";
import WeatherInfoDivType2 from "../WeatherInfoDiv/WeatherInfoDivType2";
import WeatherInforDivType3 from "../WeatherInfoDiv/WeatherInforDivType3";

const WeatherTabToday = () => {
  const weatherData = [
    { weatherParameter: "Wind", value: "6 Km/h", secondValue: "East" },
    { weatherParameter: "Humadity", value: "69%", secondValue: "" },
    { weatherParameter: "Real Feel", value: "31 C", secondValue: "" },
    { weatherParameter: "UV Index", value: "3", secondValue: "Moderate" },
    { weatherParameter: "Pressure", value: "1000 mb", secondValue: "" },
    { weatherParameter: "Chance of rain", value: "70%", secondValue: "" },
  ];
  return (
    <div className="flex justify-center md:justify-start flex-wrap px-3 py-5 gap-5">
      {weatherData.map((item, i) => {
        return <WeatherInfoDivType1 data={item} key={i} />;
      })}
      <WeatherInfoDivType2 />
      <WeatherInforDivType3 />
      <WeatherInforDivType3 />
    </div>
  );
};

export default WeatherTabToday;

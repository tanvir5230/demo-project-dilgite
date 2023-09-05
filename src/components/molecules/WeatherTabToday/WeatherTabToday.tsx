import { useWeatherDataStore } from "../../../store/Store";
import { getDirectionFromStartLetter } from "../../../utils/getDirectionFromStartLetter";
import WeatherInfoCard from "../WeatherInfoDiv/WeatherInfoDivType1";

const WeatherTabToday = () => {
  const { currentWeatherData } = useWeatherDataStore();

  const weatherData = [
    {
      weatherParameter: "Wind",
      value: currentWeatherData?.wind_kph + " Km/h",
      secondValue: getDirectionFromStartLetter(currentWeatherData?.wind_dir),
    },
    {
      weatherParameter: "Humadity",
      value: currentWeatherData?.humidity + "%",
      secondValue: "",
    },
    {
      weatherParameter: "Actual Temparature",
      value: currentWeatherData?.temp_c + " deg C",
      secondValue: "",
    },
    {
      weatherParameter: "Real Feel",
      value: currentWeatherData?.feelslike_c + " deg C",
      secondValue: "",
    },
    {
      weatherParameter: "UV Index",
      value: currentWeatherData?.uv,
      secondValue: currentWeatherData?.uv > 5 ? "High" : "Low",
    },
    {
      weatherParameter: "Pressure",
      value: currentWeatherData?.pressure_mb + " mb",
      secondValue: "",
    },
    {
      weatherParameter: "Amount of Rainfall today",
      value: currentWeatherData?.precip_mm + " mm",
      secondValue: "",
    },
    {
      weatherParameter: "How far you can see today",
      value: currentWeatherData?.vis_km + " Km",
      secondValue: "",
    },
    {
      weatherParameter: "Wind Gust Speed",
      value: currentWeatherData?.gust_kph + " KPH",
      secondValue: "",
    },
  ];
  return (
    <div className="flex justify-center md:justify-start flex-wrap px-3 py-5 gap-5">
      {weatherData.map((item, i) => {
        return <WeatherInfoCard data={item} key={i} />;
      })}
    </div>
  );
};

export default WeatherTabToday;

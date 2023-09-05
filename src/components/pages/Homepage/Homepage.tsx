import { useEffect } from "react";
import { useWeatherDataStore } from "../../../store/Store";
import HomepageTemplate from "../../template/HomepageTemplate/HomepageTemplate";

const Homepage = () => {
  const { fetchWeatherInfoByLocationName, locationData } =
    useWeatherDataStore();
  useEffect(() => {
    if (Object.keys(locationData).length === 0) {
      fetchWeatherInfoByLocationName();
    }
  }, []);
  return <HomepageTemplate />;
};

export default Homepage;

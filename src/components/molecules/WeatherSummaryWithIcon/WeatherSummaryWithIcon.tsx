import React from "react";
import MyImage from "../../atoms/Image/Image";
import WeatherImg from "../../../assets/sunny-day-icon.jpg";
import HRLine from "../../atoms/HRLine/HRLine";
import MyText from "../../atoms/Text/Text";
import { useWeatherDataStore } from "../../../store/Store";

const WeatherSummaryWithIcon: React.FC = () => {
  const { locationData, currentWeatherData } = useWeatherDataStore();
  return (
    <div>
      <MyImage
        src={WeatherImg}
        // src={currentWeatherData?.condition?.icon}
        className="h-auto mx-auto my-10"
        style={{ width: "200px" }}
        imageName="weather icon"
      />
      <div className="flex justify-center items-start">
        <MyText
          text={currentWeatherData?.temp_c}
          className="font-semibold"
          style={{ fontSize: "50px" }}
        />
        <div className="font-semibold" style={{ fontSize: "30px" }}>
          o
        </div>
        <div className="font-semibold" style={{ fontSize: "40px" }}>
          C
        </div>
      </div>
      <div className="text-center">{currentWeatherData?.condition?.text}</div>
      <HRLine />
    </div>
  );
};

export default WeatherSummaryWithIcon;

import React from "react";
import MyImage from "../../atoms/Image/Image";
import WeatherImg from "../../../assets/sunny-day-icon.png";
import HRLine from "../../atoms/HRLine/HRLine";
import MyText from "../../atoms/Text/Text";

const WeatherSummaryWithIcon: React.FC = () => {
  return (
    <div>
      <MyImage
        src={WeatherImg}
        className="h-auto mx-auto"
        imageName="weather icon"
      />
      <div className="flex justify-center items-baseline">
        <MyText text="31" className="font-bold" />
        <sup className="font-bold">o</sup>
        <div className="font-bold">C</div>
      </div>
      <div className="text-center font-bold">Most Cloudy</div>
      <HRLine />
    </div>
  );
};

export default WeatherSummaryWithIcon;

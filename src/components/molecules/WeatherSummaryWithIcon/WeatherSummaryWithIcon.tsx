import React from "react";
import MyImage from "../../atoms/Image/Image";
import WeatherImg from "../../../assets/sunny-day-icon.jpg";
import HRLine from "../../atoms/HRLine/HRLine";
import MyText from "../../atoms/Text/Text";

const WeatherSummaryWithIcon: React.FC = () => {
  return (
    <div>
      <MyImage
        src={WeatherImg}
        className="h-auto mx-auto my-10"
        style={{ width: "200px" }}
        imageName="weather icon"
      />
      <div className="flex justify-center items-start">
        <MyText
          text="31"
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
      <div className="text-center">Most Cloudy</div>
      <HRLine />
    </div>
  );
};

export default WeatherSummaryWithIcon;

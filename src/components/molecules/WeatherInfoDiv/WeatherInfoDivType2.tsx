import React from "react";
import MyText from "../../atoms/Text/Text";
import MyImage from "../../atoms/Image/Image";
import RightArrow from "../../../assets/right-arrow.png";

const WeatherInfoDivType2: React.FC = () => {
  return (
    <div
      className="text-start pl-4 rounded-3xl flex flex-col justify-around py-3"
      style={{ width: "250px", height: "150px", backgroundColor: "#798bea" }}
    >
      <MyText text="Temperature History" className="text-white" />
      <div className="flex items-center">
        <MyImage
          src={RightArrow}
          style={{ transform: "rotate(-90deg)", width: "20px", height: "20px" }}
        />
        <MyText text="hello" />
      </div>
      <div className="flex items-center">
        <MyImage
          src={RightArrow}
          style={{ transform: "rotate(90deg)", width: "20px", height: "20px" }}
        />
        <MyText text="hello" />
      </div>
    </div>
  );
};

export default WeatherInfoDivType2;

import React from "react";
import MyText from "../../atoms/Text/Text";
import { WeatherTypes } from "../../../types";

interface WeatherInfo {
  data: WeatherTypes
}

const WeatherInfoCard: React.FC<WeatherInfo> = ({data}) => {
  return (
    <div
      className="text-start pl-4 rounded-3xl flex flex-col justify-around py-3"
      style={{ width: "250px", height: "150px", backgroundColor: "#798bea" }}
    >
      <MyText text={data.weatherParameter} style={{ color: "#ddd" }} />
      <MyText
        text={data.value?.toString()}
        className="text-white font-bold"
        style={{ fontSize: "30px" }}
      />
      <MyText text={data.secondValue} className="text-white" />
    </div>
  );
};

export default WeatherInfoCard;

import React from "react";
import MyText from "../../atoms/Text/Text";

const WeatherInfoDiv: React.FC = () => {
  return (
    <div
      className="bg-blue-500 text-start pl-4 rounded-md flex flex-col justify-around py-3"
      style={{ width: "200px", height: "100px" }}
    >
      <MyText text="Wind" className="text-white" />
      <MyText text="6 Km/h" className="text-white font-bold" />
      <MyText text="East" className="text-white font-bold" />
    </div>
  );
};

export default WeatherInfoDiv;

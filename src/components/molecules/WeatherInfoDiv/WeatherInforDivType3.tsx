import React from "react";
import MyText from "../../atoms/Text/Text";

const WeatherInforDivType3: React.FC = () => {
  return (
    <div
      className="text-start pl-4 rounded-3xl flex flex-col justify-around py-3"
      style={{ width: "250px", height: "150px", backgroundColor: "#798bea" }}
    >
      <MyText text="Temperature History" className="text-white" />
      <div className="flex items-center">
        <MyText text="hello" />
        <MyText text="hello" />
      </div>
      <div className="flex items-center">
        <MyText text="hello" />
        <MyText text="hello" />
      </div>
    </div>
  );
};

export default WeatherInforDivType3;

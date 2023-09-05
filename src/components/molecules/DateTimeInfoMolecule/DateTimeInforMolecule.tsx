import React from "react";
import MyText from "../../atoms/Text/Text";
import { useWeatherDataStore } from "../../../store/Store";

const DateTimeInforMolecule: React.FC = () => {
  const { locationData, currentWeatherData } = useWeatherDataStore();
  return (
    <div className="text-center">
      <MyText text={locationData?.localtime} />
      {/* <MyText text="Friday, 12:44 PM" /> */}
      <MyText text={currentWeatherData?.is_day ? "Day" : "Night"} />
      <MyText
        text={locationData?.name}
        className="font-bold mt-5"
        style={{ fontSize: "30px" }}
      />
    </div>
  );
};

export default DateTimeInforMolecule;

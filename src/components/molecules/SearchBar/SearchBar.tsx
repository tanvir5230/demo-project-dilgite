import React from "react";
import Input from "../../atoms/Input/Input";
import MyImage from "../../atoms/Image/Image";
import SearchIcon from "../../../assets/search-icon.png";
import { useWeatherDataStore } from "../../../store/Store";

const SearchBar: React.FC = () => {
  const { locationName, updateLocationName, fetchWeatherInfoByLocationName } =
    useWeatherDataStore();

  return (
    <div
      className="flex justify-center items-center w-80 rounded-3xl py-2 px-3 mx-auto"
      style={{ backgroundColor: "#ededef" }}
    >
      <Input
        value={locationName}
        setValue={updateLocationName}
        className="w-80 outline-none border-none"
        placeholder="Enter a place name"
        style={{ backgroundColor: "#ededef" }}
      />
      <MyImage
        src={SearchIcon}
        imageName="search icon"
        style={{ width: "20px", height: "20px", cursor: "pointer" }}
        callback={fetchWeatherInfoByLocationName}
      />
    </div>
  );
};

export default SearchBar;

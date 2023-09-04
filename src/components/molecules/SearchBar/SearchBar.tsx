import React, { useState } from "react";
import Input from "../../atoms/Input/Input";
import MyImage from "../../atoms/Image/Image";
import SearchIcon from "../../../assets/search-icon.png";

const SearchBar: React.FC = () => {
  const [value, setValue] = useState("");
  return (
    <div className="flex justify-center items-center w-80 bg-white rounded-3xl py-2 px-3 mx-auto">
      <Input
        value={value}
        setValue={setValue}
        className="w-80 outline-none border-none"
        placeholder="Enter a place name"
      />
      <MyImage
        src={SearchIcon}
        imageName="search icon"
        style={{ width: "20px", height: "20px", cursor: "pointer" }}
      />
    </div>
  );
};

export default SearchBar;

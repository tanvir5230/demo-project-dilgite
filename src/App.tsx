import React from "react";
import "./index.css";
import MyImage from "./components/atoms/Image/Image";
import WeatherImg from "./assets/sunny-day-icon.png";
import HRLine from "./components/atoms/HRLine/HRLine";
import SearchBar from "./components/molecules/SearchBar/SearchBar";

const App: React.FC = () => {
  return (
    <div
      className="lg:flex justify-center"
      style={{ height: "100vh", alignItems: "center" }}
    >
      <div
        className="lg:w-2/5 md:w-1/2 sm:w-full bg-red-400 rounded-md"
        style={{ width: "400px", height: "800px" }}
      >
        <SearchBar />
        <MyImage
          src={WeatherImg}
          className="h-auto mx-auto"
          imageName="weather icon"
        />
        <HRLine />
      </div>
      <div
        className="lg:w-3/5 md:w-1/2 sm:w-ful bg-green-300 rounded-md"
        style={{ width: "800px", height: "800px" }}
      >
        <p>Right Div</p>
      </div>
    </div>
  );
};

export default App;

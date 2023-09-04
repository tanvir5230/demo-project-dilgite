import React from "react";
import "./index.css";
import SearchBar from "./components/molecules/SearchBar/SearchBar";
import WeatherSummaryWithIcon from "./components/molecules/WeatherSummaryWithIcon/WeatherSummaryWithIcon";
import DateTimeInforMolecule from "./components/molecules/DateTimeInfoMolecule/DateTimeInforMolecule";

const App: React.FC = () => {
  return (
    <div
      className="lg:flex justify-center"
      style={{
        height: "100vh",
        alignItems: "center",
        backgroundColor: "#d1cfcf",
      }}
    >
      <div
        className="lg:w-2/5 md:w-1/2 sm:w-full py-4 bg-white"
        style={{ width: "400px", height: "800px" }}
      >
        <SearchBar />
        <WeatherSummaryWithIcon />
        <DateTimeInforMolecule />
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

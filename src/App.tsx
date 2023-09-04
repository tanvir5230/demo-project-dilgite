import React from "react";
import "./index.css";
import SearchBar from "./components/molecules/SearchBar/SearchBar";
import WeatherSummaryWithIcon from "./components/molecules/WeatherSummaryWithIcon/WeatherSummaryWithIcon";
import DateTimeInforMolecule from "./components/molecules/DateTimeInfoMolecule/DateTimeInforMolecule";
import TabNames from "./components/molecules/TabNames/TabNames";
import WeatherTabToday from "./components/molecules/WeatherTabToday/WeatherTabToday";
import Footer from "./components/molecules/Footer/Footer";

const App: React.FC = () => {
  return (
    <div
      className="lg:flex justify-center md:items-start"
      style={{
        minHeight: "100vh",
        alignItems: "center",
        backgroundColor: "#d1cfcf",
        fontFamily: "'Lato', 'sans-serif'",
      }}
    >
      <div
        className="lg:w-2/6 md:w-1/2 sm:w-full pt-8 bg-white rounded-tl-lg rounded-bl-lg lg:ml-20 mx-auto min-h-full"
        style={{ height: "720px" }}
      >
        <SearchBar />
        <WeatherSummaryWithIcon />
        <DateTimeInforMolecule />
      </div>
      <div
        className="lg:w-4/6 md:w-1/2 sm:w-ful mx-auto lg:mr-20 rounded-tr-lg rounded-br-lg p-6 text-white"
        style={{ minHeight: "720px", backgroundColor: "#efefef" }}
      >
        <TabNames />
        <WeatherTabToday />
        <Footer />
      </div>
    </div>
  );
};

export default App;

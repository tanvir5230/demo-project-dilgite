import SearchBar from "../../molecules/SearchBar/SearchBar";
import WeatherSummaryWithIcon from "../../molecules/WeatherSummaryWithIcon/WeatherSummaryWithIcon";
import DateTimeInforMolecule from "../../molecules/DateTimeInfoMolecule/DateTimeInforMolecule";

const WeatherSummaryWithLocationInfo = () => {
  return (
    <div
      className="lg:w-2/6 md:w-1/2 sm:w-full pt-8 bg-white rounded-tl-lg rounded-bl-lg lg:ml-20 mx-auto xl:mt-20 min-h-full"
      style={{ height: "720px" }}
    >
      <SearchBar />
      <WeatherSummaryWithIcon />
      <DateTimeInforMolecule />
    </div>
  );
};

export default WeatherSummaryWithLocationInfo;

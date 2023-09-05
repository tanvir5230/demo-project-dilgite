import WeatherSummaryWithLocationInfo from "../../organisms/HomepageLeft/HomepageLeft";
import WeatherDetailsDiv from "../../organisms/HomepageRight/HomepageRight";

const HomepageTemplate = () => {
  return (
    <div
      className="lg:flex justify-center md:items-start xxl:items-center"
      style={{
        minHeight: "100vh",
        backgroundColor: "#d1cfcf",
        fontFamily: "'Quicksand', 'sans-serif'",
      }}
    >
      <WeatherSummaryWithLocationInfo />
      <WeatherDetailsDiv />
    </div>
  );
};

export default HomepageTemplate;

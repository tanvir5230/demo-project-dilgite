import TabNames from "../../molecules/TabNames/TabNames";
import WeatherTabToday from "../../molecules/WeatherTabToday/WeatherTabToday";
import Footer from "../../molecules/Footer/Footer";

const WeatherDetailsDiv = () => {
  return (
    <div
      className="lg:w-4/6 md:w-1/2 sm:w-ful mx-auto lg:mr-20 xl:mt-20 rounded-tr-lg rounded-br-lg p-6 text-white"
      style={{ minHeight: "720px", backgroundColor: "#efefef" }}
    >
      <TabNames />
      <WeatherTabToday />
      <Footer />
    </div>
  );
};

export default WeatherDetailsDiv;

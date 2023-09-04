import HomepageLeft from "../../organisms/HomepageLeft/HomepageLeft";
import HomepageRight from "../../organisms/HomepageRight/HomepageRight";

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
      <HomepageLeft />
      <HomepageRight />
    </div>
  );
};

export default HomepageTemplate;

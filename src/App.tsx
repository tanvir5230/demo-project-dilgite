import "./index.css";

function App() {
  return (
    <div
      className="lg:flex justify-center"
      style={{ height: "100vh", alignItems: "center" }}
    >
      <div
        className="lg:w-2/5 md:w-1/2 sm:w-full bg-red-400 rounded-md"
        style={{ width: "400px", height: "800px" }}
      ></div>
      <div
        className="lg:w-3/5 md:w-1/2 sm:w-ful bg-green-300 rounded-md"
        style={{ width: "800px", height: "800px" }}
      >
        <p>Right Div</p>
      </div>
    </div>
  );
}

export default App;

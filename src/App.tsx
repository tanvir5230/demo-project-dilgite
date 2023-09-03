import "./index.css";

function App() {
  return (
    <div className="lg:flex" style={{ height: "100vh" }}>
      <div className="lg:w-2/5 md:w-1/2 sm:w-full bg-red-400 h-full">
        <p>Left div</p>
      </div>
      <div className="lg:w-3/5 md:w-1/2 sm:w-ful bg-green-300">
        <p>Right Div</p>
      </div>
    </div>
  );
}

export default App;

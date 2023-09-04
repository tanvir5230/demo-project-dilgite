import React from "react";
import MyButton from "../../atoms/MyButton/MyButton";

const TabNames: React.FC = () => {
  return (
    <div className="flex" style={{ fontSize: "30px" }}>
      <MyButton text="Today" className="text-black font-bold px-3 py-2" />
      <MyButton text="Tomorrow" className="text-black ml-4" />
    </div>
  );
};

export default TabNames;

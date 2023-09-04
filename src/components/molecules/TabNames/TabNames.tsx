import React from "react";
import MyButton from "../../atoms/MyButton/MyButton";

const TabNames: React.FC = () => {
  return (
    <div className="flex">
      <MyButton text="Today" className="text-black font-bold px-3 py-2" />
      <MyButton text="Tomorrow" className="" />
    </div>
  );
};

export default TabNames;

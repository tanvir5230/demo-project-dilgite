import React from "react";
import MyText from "../../atoms/Text/Text";

const Footer = () => {
  return (
    <div className="flex items-center gap-3 px-3">
      <MyText text="All data provided by" className="text-black" />
      <MyText text="XYZ company" className="text-blue-300" />
    </div>
  );
};

export default Footer;

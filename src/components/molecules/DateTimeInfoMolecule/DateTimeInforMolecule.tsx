import React from "react";
import MyText from "../../atoms/Text/Text";

const DateTimeInforMolecule: React.FC = () => {
  return (
    <div className="text-center">
      <MyText text="21-july-2023" />
      <MyText text="Friday, 12:44 PM" />
      <MyText text="Day" />
      <MyText text="Dhaka" className="mt-5" />
    </div>
  );
};

export default DateTimeInforMolecule;

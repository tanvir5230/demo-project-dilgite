import React from "react";

interface InputInterface {
  value: string;
  setValue: (newLocationName: string) => void;
  placeholder?: string;
  id?: "";
  name?: "";
  className?: string;
  style?: React.CSSProperties;
}

const Input: React.FC<InputInterface> = ({
  value,
  setValue,
  id = "",
  name = "",
  placeholder,
  style,
  className,
}) => {
  return (
    <input
      type="text"
      value={value}
      id={id}
      name={name}
      placeholder={placeholder}
      style={style ? style : {}}
      className={className ? className : ""}
      onChange={e => setValue(e.target.value)}
    />
  );
};

export default Input;

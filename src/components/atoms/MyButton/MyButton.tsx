import React from "react";

interface ButtonInterface {
  text: string;
  style?: React.CSSProperties;
  className?: string;
}

const MyButton: React.FC<ButtonInterface> = ({
  text,
  style = {},
  className = "",
}) => {
  return (
    <button className={className} style={style}>
      {text}
    </button>
  );
};

export default MyButton;

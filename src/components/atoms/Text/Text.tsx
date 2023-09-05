import React from "react";

interface TextInterface {
  text?: string;
  style?: React.CSSProperties;
  className?: string;
}

const MyText: React.FC<TextInterface> = ({
  text = '',
  style = {},
  className = "",
}) => {
  return (
    <div style={style} className={className}>
      {text}
    </div>
  );
};

export default MyText;

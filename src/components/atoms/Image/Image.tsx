import React, { CSSProperties, MouseEventHandler } from "react";

interface ImageInterface {
  src: string | HTMLImageElement;
  imageName?: string;
  className?: string;
  style?: CSSProperties;
  callback?: MouseEventHandler<HTMLImageElement> | undefined;
}

const MyImage: React.FC<ImageInterface> = ({
  src ='',
  imageName = "",
  style = {},
  className = "",
  callback,
}) => {
  return (
    <img
      src={src}
      alt={imageName}
      style={style}
      className={className}
      onClick={callback}
    />
  );
};

export default MyImage;

import React, { CSSProperties } from "react";

interface ImageInterface {
  src: string | HTMLImageElement;
  imageName?: string;
  className?: string;
  style?: CSSProperties;
}

const MyImage: React.FC<ImageInterface> = ({
  src,
  imageName = "",
  style = {},
  className = "",
}) => {
  return <img src={src} alt={imageName} style={style} className={className} />;
};

export default MyImage;

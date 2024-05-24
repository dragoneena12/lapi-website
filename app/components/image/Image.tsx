import { HTMLAttributes } from "react";

export const Image = ({
  src,
  alt,
  width,
  height,
  ...props
}: HTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}) => {
  let url = `https://lapi.imgix.net/${src}?auto=format`;
  if (width) {
    url += `&w=${width}`;
  }
  if (height) {
    url += `&h=${height}`;
  }
  return <img src={url} alt={alt} {...props} />;
};

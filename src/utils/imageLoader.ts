import { ImageLoaderProps } from "next/image";

const loader = ({ src, width, quality }: ImageLoaderProps) => {
  return `https://imagedelivery.net/PEMUeBaHL1n703gWxPXv7w/${src}/public`;
};

export default loader;

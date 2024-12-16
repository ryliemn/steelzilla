import Image from "next/image";
// import { Image } from "@nextui-org/react";

interface IProps {
  imageUrl: string;
  header?: string;
  body: string;
  alt?: string;
}

export default function ImgWithText({ imageUrl, header, body, alt }: IProps) {
  return (
    <div className="w-[400px] flex-col text-center">
      <Image
        src={imageUrl}
        alt={alt ?? "Image"}
        width={400}
        height={400}
        className="rounded-lg"
      />
      <h3 className="font-bold text-lg mt-2">{header}</h3>
      <div>{body}</div>
    </div>
  );
}

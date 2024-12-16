import Image from "next/image";

interface IProps {
  text?: string;
  subtext?: string;
  imgSrc: string;
  alt: string;
}

export default function Hero({ text, subtext, imgSrc, alt }: IProps) {
  return (
    <div className="w-full h-[250px] md:h-[750px] flex justify-center items-center">
      <div className="relative w-full h-full">
        <Image src={imgSrc} alt={alt} fill style={{ objectFit: "cover" }} />
      </div>
      <div className="absolute backdrop-brightness-50 p-2 space-y-4">
        <h1 className="font-semibold text-zinc-100 text-3xl md:text-5xl">
          {text}
        </h1>
        <h2 className="font-light text-zinc-100 text-xl md:text-3xl">
          {subtext}
        </h2>
      </div>
    </div>
  );
}

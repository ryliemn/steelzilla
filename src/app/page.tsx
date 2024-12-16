import ContactUs from "@/components/contact-us";
import Hero from "@/components/hero";
import ImgWithText from "@/components/img-with-text";
import { EAGLE_FLAG, SEATTLE_VAN_GOGH, YIN_YANG_SKY } from "@/utils/images";

export default function Home() {
  return (
    <div className="bg-zinc-100">
      <div className="relative">
        <Hero imgSrc={SEATTLE_VAN_GOGH.src} alt={SEATTLE_VAN_GOGH.alt} />
        <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-white to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent" />
      </div>
      <div className="flex flex-col my-8 items-center space-y-4">
        <h1 className="text-2xl md:text-6xl font-bold text-zinc-900 text-center">
          METAL ART MONSTERS
        </h1>
        <div className="text-2xl text-zinc-900 text-center">
          CNC plasma cut, hand-finished metal artwork
        </div>
      </div>
      <div className="w-full flex flex-row flex-wrap justify-center gap-x-24 gap-y-12 py-4">
        <ImgWithText
          imageUrl={YIN_YANG_SKY.src}
          alt={YIN_YANG_SKY.alt}
          header="materials? tech specs?"
          body="x gauge steel, plasma cut, hand finishing, acids, painting, torching"
        />
        <ImgWithText
          imageUrl={EAGLE_FLAG.src}
          alt={EAGLE_FLAG.alt}
          header="customization"
          body="highlight customizations"
        />
      </div>
      <ContactUs />
    </div>
  );
}

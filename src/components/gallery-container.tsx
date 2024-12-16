import { USA_IMAGES } from "@/utils/images";
import { Divider } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import {
  Photo,
  RenderImageContext,
  RenderImageProps,
  RowsPhotoAlbum,
} from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import NextJsLightboxImage from "./next-js-lightbox-image";

interface IProps {
  galleryRef: Photo[];
  title: string;
}

export default function GalleryContainer({ galleryRef, title }: IProps) {
  const [curLightboxIdx, setLightboxIdx] = useState(-1);

  return (
    <div className="flex flex-col items-center min-w-full">
      <h1 className="text-5xl my-4 uppercase tracking-[.1em] text-center">
        {title}
      </h1>
      <Divider />
      <div className="h-auto w-full px-8 my-4">
        <RowsPhotoAlbum
          photos={galleryRef}
          render={{ image: renderNextImage }}
          defaultContainerWidth={1200}
          sizes={{
            size: "1168px",
            sizes: [
              { viewport: "(max-width: 1200px)", size: "calc(100vw - 32px)" },
            ],
          }}
          onClick={({ index: current }) => setLightboxIdx(current)}
        />
      </div>
      <Lightbox
        index={curLightboxIdx}
        open={curLightboxIdx >= 0}
        close={() => setLightboxIdx(-1)}
        slides={galleryRef}
        render={{ slide: NextJsLightboxImage }}
      />
    </div>
  );
}

function renderNextImage(
  { alt = "", title, sizes }: RenderImageProps,
  { photo, width, height }: RenderImageContext
) {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        aspectRatio: `${width} / ${height}`,
      }}
    >
      <Image fill src={photo.src} alt={alt} title={title} sizes={sizes} />
    </div>
  );
}

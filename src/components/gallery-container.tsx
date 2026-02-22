import { useState } from "react";
import { RowsPhotoAlbum } from "react-photo-album";
import type {
  Photo,
  RenderImageContext,
  RenderImageProps,
} from "react-photo-album";

type GalleryPhoto = Photo & { thumbnail: string };
import Lightbox from "yet-another-react-lightbox";
import LightboxImage from "./LightboxImage";

interface IProps {
  galleryRef: GalleryPhoto[];
  title: string;
}

export default function GalleryContainer({ galleryRef, title }: IProps) {
  const [curLightboxIdx, setLightboxIdx] = useState(-1);

  return (
    <div className="flex flex-col items-center min-w-full">
      <h1 className="text-5xl my-4 uppercase tracking-widest text-center">
        {title}
      </h1>
      <hr className="w-full border-zinc-200" />
      <div className="h-auto w-full px-8 my-4">
        <RowsPhotoAlbum<GalleryPhoto>
          photos={galleryRef}
          render={{ image: renderImage }}
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
        render={{ slide: LightboxImage }}
      />
    </div>
  );
}

function renderImage(
  { alt = "", title, sizes: _sizes }: RenderImageProps,
  { photo, width, height }: RenderImageContext<GalleryPhoto>,
) {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        aspectRatio: `${width} / ${height}`,
      }}
    >
      <img
        src={photo.thumbnail}
        alt={alt}
        title={title}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
}

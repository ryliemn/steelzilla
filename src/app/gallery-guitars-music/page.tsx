"use client";

import ContactUs from "@/components/contact-us";
import GalleryContainer from "@/components/gallery-container";
import { MUSIC_AND_GUITARS_IMAGES } from "@/utils/images";

import "react-photo-album/rows.css";
import "yet-another-react-lightbox/styles.css";

export default function GalleryGuitarsUSA() {
  return (
    <div className="flex flex-col items-center">
      <GalleryContainer
        galleryRef={MUSIC_AND_GUITARS_IMAGES}
        title="Guitars & Music"
      />
      <ContactUs />
    </div>
  );
}

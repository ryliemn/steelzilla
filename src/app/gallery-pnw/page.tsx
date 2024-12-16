"use client";

import ContactUs from "@/components/contact-us";
import GalleryContainer from "@/components/gallery-container";
import { PNW_IMAGES } from "@/utils/images";

import "react-photo-album/rows.css";
import "yet-another-react-lightbox/styles.css";

export default function GalleryPNW() {
  return (
    <div className="flex flex-col items-center">
      <GalleryContainer
        galleryRef={PNW_IMAGES}
        title="PACIFIC NORTHWEST LIFE"
      />
      <ContactUs />
    </div>
  );
}

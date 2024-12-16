"use client";

import ContactUs from "@/components/contact-us";
import GalleryContainer from "@/components/gallery-container";
import { USA_IMAGES } from "@/utils/images";

import "react-photo-album/rows.css";
import "yet-another-react-lightbox/styles.css";

export default function GalleryUSA() {
  return (
    <div className="flex flex-col items-center">
      <GalleryContainer galleryRef={USA_IMAGES} title="USA" />
      <ContactUs />
    </div>
  );
}

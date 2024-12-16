import ContactUs from "@/components/contact-us";
import Hero from "@/components/hero";
import { GENERIC_GALLERY, HEROES } from "@/utils/images";
import Image from "next/image";

export default function About() {
  return (
    <div className="flex-col">
      <Hero text="WHO WE ARE" imgSrc={HEROES[4].src} alt={HEROES[4].alt} />
      <div className="flex flex-col items-center text-2xl font-thin my-4">
        <span>Landscape curbing is an art,</span>
        <span>all about level and flow.</span>
        <span>Both must be present</span>
        <span>to please the minds eye.</span>
      </div>
      <div className="space-y-4">
        <div className="flex md:flex-row flex-col md:mx-2">
          <Image
            src={GENERIC_GALLERY[17].src}
            alt={GENERIC_GALLERY[17].alt}
            width={400}
            height={300}
            className="rounded-lg"
          />
          <div className="text-2xl self-center px-4 py-4 md:px-8 leading-9">
            At Curbzilla, we&apos;ve perfected the art of landscape curbing
            since 1993. With over 65 years of combined experience, our locally
            owned and operated company takes pride in transforming yards across
            Tacoma, Federal Way, Lakewood, and beyond. The{" "}
            <strong>owner</strong> has been on every job site since the
            beginning to ensure the highest quality.
          </div>
        </div>
        <div className="flex md:flex-row flex-col-reverse md:mx-2">
          <div className="text-2xl self-center md:px-8 px-4 py-4 leading-9">
            The <strong>finisher</strong> has been with the company for 22
            years, and is probably the most important person on the job site. He
            considers it an art! He&apos;s the one on his knees making love to
            the curbing. I like to say if there were an Olympics for curbing,
            I&apos;m not guaranteeing he would get the gold, but I&apos;m pretty
            darn sure he would make the podium, and I will take top 3 any time!
          </div>
          <Image
            src={GENERIC_GALLERY[15].src}
            alt={GENERIC_GALLERY[15].alt}
            width={400}
            height={300}
            className="rounded-lg"
          />
        </div>
        <div className="flex md:flex-row flex-col md:mx-2">
          <Image
            src="94993eab-247c-4ce8-bb9a-102ff5c93d00"
            alt="an image of curbing"
            width={400}
            height={300}
            className="rounded-lg"
          />
          <div className="text-2xl self-center md:px-8 px-4 py-4 leading-9">
            The <strong>mixer</strong> has been with the company for 14 years,
            and owned his own curb company previously. The mix is crucial in an
            excrusion process, especially for a non-formed, poured product like
            ours. We make our mix on site, and each mix only goes about ten
            feet. Consistency is crucial, or else there will be color and
            texture changes throughout the continuous piece. Like a fine-tuned
            orchestra, each member plays his part to create curbing levels above
            anyone else in the area. There simply is no comparison.
          </div>
        </div>
      </div>

      <div className="my-8 text-3xl p-8 text-center leading-9">
        Don&apos;t let your yard get the best of you. We offer free design
        meetings, and can help you come up with the perfect concrete curbing to
        complement your home and garden. Get in touch today!
      </div>

      <ContactUs />
    </div>
  );
}

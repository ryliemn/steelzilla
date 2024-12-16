import ContactUs from "@/components/contact-us";
import { Divider } from "@nextui-org/react";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex-col">
      <div className="my-8 space-y-8 px-4">
        <div className="justify-center items-center space-x-4 flex md:flex-row flex-col">
          <span className="font-thin text-2xl">CALL OR TEXT</span>
          <span className="md:text-5xl text-4xl font-semibold underline">
            <Link href="sms:12538205600">(253)820 5600</Link>
          </span>
        </div>
        <div className="justify-center items-center space-x-4 flex md:flex-row flex-col">
          <span className="font-thin text-2xl">EMAIL</span>
          <span className="md:text-5xl text-4xl font-semibold underline">
            <Link href="mailto:curbzilla@gmail.com">steelzilla@gmail.com</Link>
          </span>
        </div>
      </div>

      <Divider />
      <h1 className="text-xl text-center px-4 my-4">
        You can also contact us via the form below.
      </h1>

      <ContactUs />
    </div>
  );
}

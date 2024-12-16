"use client";

import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export default function ContactUs() {
  const [state, handleSubmit] = useForm("manyndnw");

  return (
    <div className="w-full items-center bg-slate-800 text-slate-50 py-6 flex flex-col">
      <div className="flex mb-4 space-x-12">
        <Link
          href="https://www.facebook.com/profile.php?id=100057641912865"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/Facebook_Logo_Primary.png"
            width="60"
            height="60"
            alt="Facebook logo; links out to curbzilla facebook page"
            unoptimized
          />
        </Link>
      </div>
      {state.succeeded ? (
        <p className="text-3xl">
          Thanks for reaching out! We will be in contact soon.
        </p>
      ) : (
        <div className="w-full mx-4 flex flex-col items-center">
          <h1 className="text-2xl md:text-5xl uppercase text-center tracking-wider mx-16">
            Contact us with your custom metal art ideas
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center space-y-4 py-4 my-4 max-w-[650px]"
          >
            <div className="flex md:flex-row flex-col items-center">
              <label htmlFor="email" className="text-xl">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="mx-4 text-slate-800 p-1"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <span className="mx-4">OR</span>
              <label htmlFor="phone" className="text-xl">
                Phone #
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                className="mx-4 text-slate-800 p-1"
              />
              <ValidationError
                prefix="Phone Number"
                field="phone"
                errors={state.errors}
              />
            </div>
            <div className="w-full">
              <textarea
                id="message"
                name="message"
                placeholder="What would you like to steel?"
                className="w-full md:h-20 h-28 text-slate-800 p-1"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <div>
              <label htmlFor="name" className="text-xl font-bold">
                * Your name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                className="mx-4 text-slate-800 p-1"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>

            <Button type="submit" color="primary" disabled={state.submitting}>
              Submit
            </Button>
          </form>
        </div>
      )}
    </div>
  );
}

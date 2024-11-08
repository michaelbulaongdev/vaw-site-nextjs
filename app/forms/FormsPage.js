"use client";

import Link from "next/link";
import { formsButton } from "../styles";

export default function FormsPage() {
  return (
    <main className="flex flex-col">
      <section className="bg-[url(https://res.cloudinary.com/dx97fht5v/image/upload/v1728055039/AdobeStock_85532144_fuq6m0.jpg)]">
        <div className="flex flex-col md:flex-row p-5 max-w-screen-2xl mx-auto">
          <div className="md:w-1/2 space-y-5 p-5">
            <h1 className="font2 text-5xl text-white text-center md:text-left">
              Let&apos;s make it official!
            </h1>
            <div className="p-3 md:p-5 space-y-3">
              <h2 className="font-normal text-xl md:text-2xl text-white text-center md:text-left">
                Simply click on each of the boxes and fill them out online.
              </h2>
              <h2 className="font-normal text-xl md:text-2xl text-white text-center md:text-left">
                Complete all <strong>4</strong>&nbsp;forms&nbsp;
                <strong className="underline">prior</strong>
                &nbsp;to your first session!
              </h2>
            </div>
            <div className="p-3 md:p-5 text-center md:text=left">
              <h3 className="text-xl text-white">
                Have a question about the forms?
              </h3>
              <h3 className="text-white">
                Contact me via&nbsp;
                <Link
                  href="mailto:ValleyAllergyAndWellness@outlook.com"
                  className="hover:underline hover:text-color3 text-color4 font-bold"
                >
                  email
                </Link>
                &nbsp;or&nbsp;
                <Link
                  href="tel:+12097518676"
                  className="hover:underline hover:text-color3 text-color4 font-bold"
                >
                  phone
                </Link>
                .
              </h3>
            </div>
            <div className="p-3 md:p-5 text-center">
              <h3 className="text-xl text-white">
                Want a sneak peek of my office?
              </h3>
              <Link
                href="/what-is-bie#tour-video"
                className="py-1 px-5 border border-white bg-color1 text-white text-sm hover:bg-white hover:border-color1 hover:text-color1 ease-in-out duration-200"
              >
                <button className="mt-1 uppercase">click here</button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex flex-col mx-auto space-y-10 p-5 lg:p-16 justify-center bg-white/10">
            <button className={formsButton}>
              <Link
                href="https://form.jotform.com/231097803601047"
                target="_blank"
              >
                new client form
              </Link>
            </button>
            <button className={formsButton}>
              <Link
                href="https://form.jotform.com/231098302441044"
                target="_blank"
              >
                informed consent form
              </Link>
            </button>
            <button className={formsButton}>
              <Link
                href="https://form.jotform.com/231097536375058"
                target="_blank"
              >
                client acknowledgement form
              </Link>
            </button>
            <button className={formsButton}>
              <Link
                href="https://form.jotform.com/241966487538070"
                target="_blank"
              >
                cancellation policy form
              </Link>
            </button>
          </div>
        </div>
      </section>
      <section className="bg-color3/10">
        <div className="max-w-screen-2xl mx-auto py-10 flex flex-col text-center space-y-5">
          <h2 className="text-3xl lg:text-5xl font2">Got questions?</h2>
          <p className="text-xl md:text-3xl">
            Check out our FAQs or contact us!
          </p>
          <div className="flex flex-row mx-auto space-x-5">
            <Link
              href="/faq"
              className="py-2 px-5 text-white bg-color1 border border-color1 hover:bg-transparent hover:text-color1 rounded-md min-w-24 ease-in-out duration-150"
            >
              <button>FAQs</button>
            </Link>
            <Link
              href="/contact"
              className="py-2 px-5 text-white bg-color1 border border-color1 hover:bg-transparent hover:text-color1 rounded-md min-w-24 ease-in-out duration-150"
            >
              <button>Contact</button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

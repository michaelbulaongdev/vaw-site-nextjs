"use client";

import { CldImage } from "next-cloudinary";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="flex flex-col">
      <section
        id="rates"
        className="bg-cover bg-[url(https://res.cloudinary.com/dx97fht5v/image/upload/v1729433270/grass-image_vzapu2.jpg)] flex flex-col md:flex-row"
      >
        <div className="py-16 px-5 text-center mx-auto w-full bg-black/10">
          <h2 className="px-5 md:px-10 mb-10 font2 text-white text-4xl md:text-5xl">
            OUR SERVICES
          </h2>
          <div className="flex flex-col space-y-10 md:space-y-0 md:space-x-5 lg:space-x-0 md:flex-row lg:divide-x max-w-screen-2xl mx-auto">
            <div className="md:w-1/2">
              <div className="flex flex-col max-w-xs h-full mx-auto bg-white/90 rounded-2xl p-7 justify-between shadow-lg">
                <div className="space-y-5">
                  <h3 className="text-color1 text-2xl font2 font-bold">
                    INITIAL VISIT
                  </h3>
                  <p className="bg-color1 text-white text-xl w-24 mx-auto p-1 rounded-3xl">
                    $185
                  </p>
                  <ul className="list-disc mx-5 lg:mx-14 text-left">
                    <li>60-90 minutes</li>
                    <li>Muscle testing for homeostatic imbalances</li>
                    <li>
                      Balancing of up to 4 different categories of stressors
                    </li>
                  </ul>
                </div>
                <div className="mt-5 md:mt-0">
                  <Link
                    href="/what-is-bie#what-to-expect"
                    className="py-2 px-5 mx-auto rounded-lg border border-3 border-color1 bg-color1 text-white text-base hover:bg-transparent hover:text-color1 ease-in-out duration-200"
                  >
                    LEARN MORE
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="max-w-xs h-full mx-auto bg-white/90 rounded-2xl p-7 space-y-5 shadow-lg">
                <h3 className="text-color1 text-2xl font2 font-bold">
                  FOLLOW-UP VISITS
                </h3>
                <p className="bg-color1 text-white text-xl w-24 mx-auto p-1 rounded-3xl">
                  $85
                </p>
                <ul className="list-disc mx-5 lg:mx-14 text-left">
                  <li>30-40 minutes</li>
                  <li>Re-testing of the first set of stressors</li>
                  <li>Testing of any additional stressors</li>
                  <li>
                    Modification in plan and determination of additional
                    sessions
                  </li>
                </ul>
                <div>
                  <Link
                    href="/what-is-bie#what-to-expect"
                    className="py-2 px-5 mx-auto rounded-lg border border-3 border-color1 bg-color1 text-white text-base hover:bg-transparent hover:text-color1 ease-in-out duration-200"
                  >
                    LEARN MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <p className="mx-10 pt-10 text-white text-2xl">
            Ask about our packaged service bundles!
          </p>
        </div>
      </section>
      <section className="bg-color2/10">
        <div className=" p-10 space-y-5 max-w-screen-2xl mx-auto text-center">
          <h2 className="text-3xl">Payment</h2>
          <p className="text-xl">
            We accept cash, credit/debit cards, and FSA/HSA cards.
          </p>
        </div>
      </section>
      <section className="bg-color4/10">
        <div className="max-w-screen-2xl mx-auto p-10 space-y-5 flex flex-col">
          <div className="mx-auto text-center text-xl md:text-4xl">
            <p>Are you ready to embark on a</p>
            <p>new path towards relief?</p>
          </div>
          <button className="mx-auto px-5 py-2 rounded-lg border border-3 border-color1 bg-color1 text-white text-lg hover:bg-white hover:border-color hover:text-color1 ease-in-out duration-200">
            <Link
              href="https://squareup.com/appointments/book/k5xabxhqoc83g2/L5QGYQW5FHNP6/start"
              target="_blank"
              className=""
            >
              Click here to setup your first visit!
            </Link>
          </button>
        </div>
      </section>
    </main>
  );
}

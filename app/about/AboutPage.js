"use client";

import { CldImage } from "next-cloudinary";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="flex flex-col max-w-screen-2xl mx-auto">
      <section className="flex flex-col lg:flex-row bg-color4/10">
        <div className="lg:w-1/2">
          <CldImage
            width="1000"
            height="1500"
            src="https://res.cloudinary.com/dx97fht5v/image/upload/v1729446649/DSC07776_zijztk.jpg"
            sizes="100vw"
            alt="profile photo of deborah"
            className="w-full object-cover mx-auto"
          />
        </div>
        <div className="lg:w-1/2">
          <h1 className="font2 text-5xl xl:text-6xl text-center my-5 px-5">
            Meet Deborah
          </h1>
          <h2 className="text-center font-normal text-base md:text-lg">
            Owner & Registered BioEnergetic
          </h2>
          <h2 className="text-center font-normal text-base md:text-lg">
            Intolerance Elimination Practitioner
          </h2>
          <div className="border border-color1 rounded-xl p-5 m-5 xl:p-10 xl:m-10 space-y-5 text-color1">
            <p className="text-sm xl:text-base">
              Hi! I’m Deborah, and I’m so glad you’re here to learn more about
              me and my journey with BIE!
            </p>
            <p className="text-sm xl:text-base">
              My passion for health and wellness began when my mom was diagnosed
              with stage IV colon cancer. Her choice to explore alternative
              treatments opened my eyes to the world of holistic health, and in
              2007, I earned a degree in Holistic Health and Wellness. Although
              my goal was to start my own health consulting business, life took
              a different turn. I was a new graduate, engaged, and needing
              stable income to help with the wedding, so I began a career in
              government work with San Joaquin County, and subsequently with the
              State of California. The steady income allowed us to buy our first
              home, grow our family through international adoption. My husband
              and I have two beautiful children adopted from South Korea.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-color1 px-5 py-10">
        <h3 className="font3 text-center text-white font-normal text-3xl md:text-4xl">
          &quot;I saw a way for me to bring my passion for helping others and my
          obsession with health into a place of purpose&quot;
        </h3>
      </section>
      <section className="bg-color4/10 flex flex-col lg:flex-row">
        <div className="flex flex-col lg:w-1/2">
          <p className="text-sm md:text-lg p-5 md:p-10 text-color1">
            The security of my government job provided numerous benefits and
            opportunities to grow both professionally and personally. For the
            first four years, I reviewed medical records for Social Security’s
            Disability program, followed by 10 years of providing software
            support. Although my career wasn’t directly related to alternative
            or holistic health, my passion for health never faded. I’ve always
            been deeply interested in biohacking, constantly immersing myself in
            research, articles, and podcasts to optimize my health and that of
            my family, particularly because of my family’s significant history
            with cancer. After losing my mom in 2009, my personal mission became
            clear: to live a long and healthy life and not let cancer define my
            story. Health became my top priority—and my most invested hobby—as I
            consistently explored new supplements and healing modalities.
          </p>
        </div>
        <div className="lg:w-1/2 min-h-96 bg-cover bg-center bg-[url(https://res.cloudinary.com/dx97fht5v/image/upload/v1729446648/DSC07039_q57vx0.jpg)]"></div>
      </section>
      <section className="bg-color4/10 flex flex-col-reverse lg:flex-row">
        <div className="lg:w-1/2 min-h-96 bg-cover bg-center bg-[url(https://res.cloudinary.com/dx97fht5v/image/upload/v1729446649/DSC07030_khgopj.jpg)]"></div>
        <div className="flex flex-col lg:w-1/2">
          <p className="text-sm md:text-lg p-5 md:p-10 text-color1">
            Although I valued my government career, the last five years became
            increasingly difficult as I found myself lacking passion and purpose
            in my work. In June 2022, I took a leap of faith and resigned,
            trusting that God would guide me toward a new path. During my
            exploration of yet another health modality (as usual!), I discovered
            BIE. I was immediately drawn to its powerful yet gentle approach to
            healing and knew I had to learn more. I saw a way for me to bring my
            passion for helping others and my obsession with health into a place
            of purpose. This marked the revival of dreams I had once set aside.
            In November 2022, I became a licensed and registered BIE
            practitioner, and Valley Allergy + Wellness was born!
          </p>
        </div>
      </section>
      <section className="bg-color1">
        <div className="p-5 lg:p-10 text-xl md:text-3xl text-white space-y-10 max-w-screen-lg font3 text-center mx-auto">
          <p className="">
            Thank you for taking the time to read my story. Remember, no matter
            what your goals or dreams are—whether it’s a new job, a child,
            overcoming a health challenge—don’t give up.
          </p>
          <p className="">Believe that it CAN and WILL happen!</p>
        </div>
      </section>
      <section className="flex flex-col md:flex-row bg-color4/10">
        <div className="md:w-1/2 flex flex-col justify-center">
          <div className="p-10 text-xl lg:text-3xl font3 space-y-10 text-center">
            <p>Are you ready to embark on your own healing journey?</p>
            <p>
              Contact me today to learn how Valley Allergy + Wellness can help
              you achieve lasting wellness!
            </p>
          </div>
          <Link href="/contact" className="mx-auto p-1">
            <button className="uppercase mb-10 py-2 px-5 rounded-lg border border-3 border-color1 bg-color1 text-white text-sm md:text-lg hover:bg-transparent hover:text-color1 ease-in-out duration-200">
              contact me
            </button>
          </Link>
        </div>
        <div className="md:w-1/2">
          <CldImage
            width="1000"
            height="1500"
            src="https://res.cloudinary.com/dx97fht5v/image/upload/v1729446649/DSC07765_gapxdx.jpg"
            sizes="100vw"
            alt="profile photo of deborah"
            className="w-full object-cover mx-auto"
          />
        </div>
      </section>
    </main>
  );
}

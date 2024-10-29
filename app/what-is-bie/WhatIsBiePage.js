"use client";

import Link from "next/link";

export default function WhatIsBiePage() {
  return (
    <main className="flex flex-col">
      <section className="bg-color4/10">
        <div className="flex flex-col md:flex-row p-5 max-w-screen-2xl mx-auto">
          <div className="md:w-1/2 m-5 p-5 border border-color5">
            <h2 className="p-5 text-center text-3xl md:text-5xl">
              What is BIE?
            </h2>
            <p className="p-5 m-0 md:m-5 bg-color2/10 text-sm md:text-lg">
              <strong>Bioenergetic Intolerance Elimination (BIE)</strong>,
              founded in 1998, is an effective, non-invasive modality that
              enables one’s body to recognize sensitivities or intolerances
              using energetic frequencies. Without the use of needles or drugs,
              BIE assists the body in recovering from symptoms associated with
              the intolerances.
            </p>
          </div>
          <div className="md:w-1/2 bg-cover bg-[url(https://res.cloudinary.com/dx97fht5v/image/upload/v1729433270/grass-image_vzapu2.jpg)] flex justify-center items-center m-5">
            <Link
              href="/theory-behind-bie"
              className="mx-auto py-2 px-5 border border-white bg-color2 text-white text-xl text-center font-bold hover:bg-white/50 ease-in-out duration-200"
            >
              <button>Read the Theory Behind BIE</button>
            </Link>
          </div>
        </div>
      </section>
      <section
        id="what-to-expect"
        className="bg-cover bg-[url(https://res.cloudinary.com/dx97fht5v/image/upload/v1729993601/Sunlight_cs8fou.jpg)] p-5 md:p-10"
      >
        <div className="max-w-screen-2xl mx-auto">
          <h2 className="bg-white/50 text-color1 mx-auto p-5 text-3xl lg:text-4xl text-center rounded-tl-3xl rounded-br-3xl lg:rounded-tl-full lg:rounded-br-full">
            When working with me, you can expect:
          </h2>
          <ul className="text-lg md:text-2xl max-w-2xl mx-auto text-left text-color1 space-y-7 p-5 md:p-10 mt-5 md:mt-10 bg-white/50 italic">
            <li>
              ► A safe, calming environment where you can feel comfortable
              sharing your story, health challenges, and goals
            </li>
            <li>
              ► A personalized process to identify and address the stressors
              impacting your health
            </li>
            <li>
              ► A gentle, non-invasive balancing techniques using a patented
              device to help relieve your symptoms and restore harmony to your
              body
            </li>
          </ul>
        </div>
      </section>
      <section id="tour-video" className="bg-color4/10">
        <div className="flex flex-col lg:flex-row py-5 md:py-10 px-5 max-w-screen-2xl mx-auto">
          <h2 className="flex items-center p-10 text-center lg:text-right text-2xl md:text-4xl lg:w-2/5">
            Watch the video to see what an initial visit looks like!
          </h2>
          <video
            className="mx-auto"
            width="720"
            height="480"
            controls
            preload="none"
            poster="https://res.cloudinary.com/dx97fht5v/image/upload/v1728902107/video-poster_ufclyq.png"
          >
            <source
              src="https://res.cloudinary.com/dx97fht5v/video/upload/v1728901083/what-to-expect_o2mwag.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </main>
  );
}

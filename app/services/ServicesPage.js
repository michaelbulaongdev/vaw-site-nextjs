"use client";

import { CldImage } from "next-cloudinary";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="flex flex-col">
      <section className="bg-cover bg-[url(https://res.cloudinary.com/dx97fht5v/image/upload/v1726006464/pexels-jplenio-1423601_bsdnb4.jpg)] p-5 md:p-10">
        <h2 className="bg-white/50 text-color2 mx-auto p-5 text-3xl lg:text-4xl text-center rounded-tl-3xl rounded-br-3xl lg:rounded-tl-full lg:rounded-br-full">
          When working with me, you can expect…
        </h2>
        <ul className="text-lg md:text-2xl max-w-2xl mx-auto text-left space-y-7 p-5 md:p-10 mt-5 md:mt-10 bg-white/50 italic">
          <li>
            ► A safe, relaxing environment for you to share your story, health
            challenges, and goals
          </li>
          <li>
            ► Together we will identify the stressors that are causing you to
            have negative reactions
          </li>
          <li>
            ► I’ll use a gentle, non-invasive patented device to bring balance
            to your body and relieve you of your symptoms
          </li>
        </ul>
      </section>
      <section className="flex flex-col lg:flex-row py-5 md:py-10 px-5 bg-color4/10">
        <h2 className="p-10 text-center lg:text-right text-2xl md:text-3xl lg:w-2/5">
          Let me take you through what an initial visit would look like with me!
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
      </section>
      <section className="p-5 lg:p-10 bg-cover bg-[url(https://res.cloudinary.com/dx97fht5v/image/upload/v1728055039/AdobeStock_85532144_fuq6m0.jpg)]">
        <h2 className="text-white text-2xl md:text-4xl text-center font-normal italic">
          Can you imagine this transformation for yourself or a loved one?
        </h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 bg-white/70 m-0 my-5 md:m-5 p-5 rounded-xl">
            <h3 className="uppercase text-2xl">before</h3>
            <h4 className="text-lg italic my-5">
              You’re at a loss battling one or more of the following:
            </h4>
            <ul className="mx-5 space-y-2">
              <li>Hay Fever and Seasonal Allergies</li>
              <li>Headaches or Migraines</li>
              <li>Indigestion (bloating, constipation, diarrhea)</li>
              <li>Food Intolerances/Sensitivities</li>
              <li>Skin Issues (acne, eczema, psoriasis, hives)</li>
              <li>Chronic Fatigue</li>
              <li>Hormonal Imbalances</li>
              <li>Blood Sugar Imbalances</li>
              <li>High Blood Pressure or High Cholesterol</li>
              <li>Arthritis and Joint Pain</li>
            </ul>
          </div>
          <div className="md:w-1/2 bg-white/70 m-0 my-5 md:m-5 p-5 rounded-xl">
            <h3 className="uppercase text-2xl">after</h3>
            <h4 className="text-lg italic my-5">
              You’ll regain control over your health and have:
            </h4>
            <ul className="mx-5 space-y-2">
              <li>Drug-free relief</li>
              <li>Optimal digestion</li>
              <li>Freedom to enjoy all foods</li>
              <li>Clear, beautiful skin</li>
              <li>Energy and stamina</li>
              <li>Balanced hormones</li>
              <li>Blood sugar, blood pressure, and cholesterol control</li>
              <li>Decreased joint pain and inflammation</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-color4/50 p-10 space-y-5">
        <h2 className="text-3xl">Payment</h2>
        <p className="text-lg">
          We accept cash, credit/debit cards, and FSA/HSA cards.
        </p>
      </section>
      <section className="bg-color5 p-10 space-y-5 text-white flex flex-col md:flex-row">
        <p className="md:w-1/2 text-xl md:text-3xl">
          Has everything you read about BIE checking all the boxes for a new
          path towards relief?
        </p>
        <button className="my-5 mx-auto py-2 px-5 rounded-lg border border-3 border-color1 bg-color1 text-white text-lg hover:bg-white hover:border-color hover:text-color1 ease-in-out duration-200">
          <Link
            href="https://squareup.com/appointments/book/k5xabxhqoc83g2/L5QGYQW5FHNP6/start"
            target="_blank"
            className=""
          >
            Click here to setup your first visit!
          </Link>
        </button>
      </section>
    </main>
  );
}

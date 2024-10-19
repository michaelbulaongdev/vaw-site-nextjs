"use client";

import { CldImage } from "next-cloudinary";
import Link from "next/link";
import { Carousel } from "@material-tailwind/react";

import { testimonialCard1, testimonialCard2 } from "./styles";
import { homeList1, homeGridList } from "./textContent";

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <section className="bg-cover bg-[url(https://res.cloudinary.com/dx97fht5v/image/upload/v1728055039/AdobeStock_85532144_fuq6m0.jpg)] flex lg:min-h-[80vh]">
        <div className="py-36 text-center w-screen bg-black/10">
          <h1 className="px-10 font2 text-white text-5xl lg:text-7xl max-w-5xl mx-auto leading-tight">
            Relief starts here
          </h1>
          <p className="text-white p-10 text-lg lg:text-2xl">
            BIOENERGETIC INTOLERANCE ELIMINATION &#40;B.I.E.&#41;
          </p>
          <div className="px-5">
            <Link
              href="/theory-behind-bie"
              className="py-2 px-5 rounded-lg border border-3 border-white bg-black/10 text-white text-lg hover:bg-white hover:text-color5 ease-in-out duration-200"
            >
              Learn more about B.I.E.
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-color2/10 p-5 md:p-10">
        <div className="max-w-screen-2xl mx-auto my-5">
          <h2 className="font3 text-center text-4xl lg:text-5xl">
            True healing that gets to the root, not just the symptoms
          </h2>
          <div className="max-w-2xl mx-auto pt-5 lg:pt-10 space-y-5 lg:text-lg">
            <p>
              The current medical system often prioritizes symptom relief,
              leading to chronic conditions that persist without effective
              long-term solutions. This focus results in recurring symptoms,
              increased healthcare costs, and patient frustration due to a lack
              of progress in their health.
            </p>
            <p>
              At our clinic, we take an innovative approach to health that
              focuses on identifying and addressing the root causes of common
              health issues. By uncovering the underlying factors behind your
              symptoms and utilizing frequencies to harmonize the body, we
              promote its natural ability to heal. Our mission is to provide
              more than just temporary relief, we aim to deliver holistic
              solutions that enhance your overall well-being and vitality.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-color1 px-5 py-5 md:py-10">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="mb-5 text-white text-center text-xl md:text-2xl">
            We help children and adults with a wide range of conditions,
            including:
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center">
            {homeGridList.map((item, index) => (
              <li
                key={index}
                className="flex border border-white rounded-xl min-w-1/3 items-center justify-center m-3 md:m-5 p-5 text-white"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-col md:flex-row">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </section>
      <section className="bg-white flex flex-col-reverse lg:flex-row">
        <div className="lg:w-1/2 min-h-96 md:min-h-screen bg-cover bg-[url(https://res.cloudinary.com/dx97fht5v/image/upload/v1729214212/DSC07512_ppxuc0.jpg)]"></div>
        <div className="lg:w-1/2 p-5 md:p-10 self-center">
          <h2 className="font2 p-5 text-color1 text-2xl lg:text-3xl">
            If you&apos;re looking for a way to balance and improve:
          </h2>
          <ul className="pl-5">
            {homeList1.map((item, index) => (
              <li
                key={index}
                className="flex flex-row space-x-5 text-md lg:text-lg text-color1 py-1"
              >
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#444373"
                  >
                    <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
                  </svg>
                </p>
                <p>{item}</p>
              </li>
            ))}
          </ul>
          <p className="p-5 text-color1 text-xl lg:text-2xl">
            <span className="font2 font-bold">
              Bioenergetic Intolerance Elimination &#40;B.I.E.&#41;
            </span>
            &nbsp; may be the answer for YOU!
          </p>
        </div>
      </section>
      <section className="bg-white flex flex-col lg:flex-row">
        <div className="lg:w-1/2 p-10 self-center">
          <p className=" text-color1 lg:text-lg">
            Working with Valley Allergy + Wellness will involve&nbsp;
            <strong>
              Bioenergetic Intolerance Elimination &#40;B.I.E.&#41;
            </strong>
            , a practice that uses energetic frequencies to identify the
            stressor&#40;s&#41; that are causing a negative reaction within your
            body. Once these stressors are identified, balance is then restored
            by using a safe, non-invasive patented device to re- introduce the
            frequencies to 16 acupuncture points across the body.
          </p>
          <div className="my-5">
            <h2 className="font3 text-color1 text-3xl md:text-4xl">
              The BEST part?
            </h2>
            <h2 className="font3 text-color1 text-3xl md:text-4xl">
              <span className="underline">NO</span> needles are involved!
            </h2>
          </div>

          <button className="py-2 px-5 rounded-lg border border-3 border-white bg-color1 text-white text-lg hover:bg-white hover:border-color1 hover:text-color1 ease-in-out duration-200">
            <Link
              href="https://squareup.com/appointments/book/k5xabxhqoc83g2/L5QGYQW5FHNP6/start"
              target="_blank"
            >
              BOOK YOUR APPOINTMENT TODAY
            </Link>
          </button>
        </div>
        <div className="lg:w-1/2 min-h-96 md:min-h-screen bg-cover bg-[url(https://res.cloudinary.com/dx97fht5v/image/upload/v1729214212/DSC07429_v2gcxv.jpg)]"></div>
      </section>
      <section className="bg-color3/10">
        <div className="flex flex-col md:flex-row p-5 max-w-screen-2xl mx-auto">
          <div className="md:w-1/2">
            <CldImage
              width="600"
              height="800"
              src="https://res.cloudinary.com/dx97fht5v/image/upload/v1726009247/dchan-1_dxsjdf.png"
              sizes="100vw"
              alt="profile photo of deborah"
              className="p-5 object-scale-down mx-auto"
            />
          </div>
          <div className="md:w-1/2 lg:w-3/5 p-10 flex flex-col justify-center lg:px-20 xl:px-32">
            <CldImage
              width="50"
              height="50"
              src="https://res.cloudinary.com/dx97fht5v/image/upload/v1728259824/quotes_jjoofq.png"
              sizes="100vw"
              alt="quotation mark"
              className="mx-auto"
            />
            <p className="lg:text-lg my-5 lg:my-10 text-center text-color1">
              My mission at Valley Allergy + Wellness is to assist YOU in your
              pursuit for health and wellness and to empower you to connect to
              yourself - in mind, body, and spirit and THRIVE! My goal is to
              provide you with a safe and welcoming space to share your story,
              find healing, and give you hope for tomorrow.
            </p>
            <p className="text-sm text-center text-color1 bg-gray-200">
              — <span className="font2">DEBORAH CHAN</span>, Owner & BIE
              Practitioner
            </p>
            <Link
              href="/about"
              className="mt-5 py-2 px-5 rounded-lg border border-3 border-color1 bg-color1 text-white text-xs text-center font-bold hover:bg-color1/30 hover:text-color1 ease-in-out duration-200"
            >
              <button>READ FULL BIO</button>
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-[url(https://res.cloudinary.com/dx97fht5v/image/upload/v1728055039/AdobeStock_85532144_fuq6m0.jpg)] text-white text-center py-10">
        <h2 className="font2 text-white text-4xl lg:text-6xl text-center p-5">
          Client Testimonials
        </h2>
        <Carousel className="max-w-screen-2xl mx-auto">
          <div className="w-full min-h-96 flex align-middle justify-center px-7 py-10">
            <div className="flex flex-col border border-white p-5 justify-center space-y-10 mx-10 max-w-96">
              <p className="italic">
                &quot;Deborah Chan is a delight to work with and I highly
                recommend her service for anybody suffering from allergies or
                any other imbalances in their system!&quot;
              </p>
              <p className="uppercase text-lg">vicki p.</p>
            </div>
          </div>
          <div className={testimonialCard1}>
            <div className={testimonialCard2}>
              <p className="italic text-xs">
                &quot;Before the treatment with Deborah yesterday I was stressed
                to the max! After the session, over the next hour it was a
                subtle change. I just felt like I could resume normal life and
                not have my thoughts occupied by the doom and gloom. I felt calm
                and relaxed and when the negative thoughts came back I was able
                to replace them with positive ones very easily. Something that
                wasn&apos;t even possible before the treatment! That&apos;s huge
                for me! Now I want to get more of the emotional work done!&quot;
              </p>
              <p className="uppercase text-lg">patrick m.</p>
            </div>
          </div>
          <div className={testimonialCard1}>
            <div className={testimonialCard2}>
              <p className="italic text-sm">
                &quot;For years now I&apos;ve had food sensitivities but the
                real struggle has been with sugar! Deb didn&apos;t disappoint.
                Very king and explained the process before the appointment. One
                day I realized I wasn&apos;t even craving my favorite candy. I
                couldn&apos;t wait to thank her & let her know about my new
                found FREEDOM!&quot;
              </p>
              <p className="uppercase text-lg">angi s.</p>
            </div>
          </div>
        </Carousel>
      </section>
    </main>
  );
}

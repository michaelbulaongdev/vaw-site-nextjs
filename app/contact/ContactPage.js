"use client";

import Link from "next/link";
import Script from "next/script";
import { CldImage } from "next-cloudinary";

import {
  Description,
  Field,
  Fieldset,
  Input,
  Label,
  Legend,
  Select,
  Textarea,
  Button,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

export default function ContactPage() {
  return (
    <main className="flex flex-col">
      <section className="p-5 lg:p-10 bg-[url(https://res.cloudinary.com/dx97fht5v/image/upload/v1728055039/AdobeStock_85532144_fuq6m0.jpg)]">
        <div className="max-w-screen-2xl mx-auto py-5 text-center space-y-5">
          <h2 className="text-white text-4xl md:text-5xl">
            Let&apos;s connect and get you well!
          </h2>
          <p className="text-white text-lg md:text-2xl max-w-screen-lg mx-auto">
            If you have additional questions not addressed on our&nbsp;
            <Link
              href="/faq"
              className="bg-white/10 hover:underline hover:text-color3"
            >
              FAQ Page
            </Link>
            , you can contact us by filling out the form below.
          </p>
        </div>
        <form onSubmit="emailSend(); reset(); return false;">
          <Fieldset className="space-y-6 rounded-xl bg-white/5 p-6 sm:p-10 max-w-screen-md mx-auto">
            {/* <Legend className="text-base/7 font-semibold text-white">
            Name (required)
          </Legend> */}
            <div className="flex flex-col md:flex-row md:space-x-5">
              <Field className="md:w-1/2">
                <Label className="text-sm/6 font-medium text-white">
                  First Name (required)
                </Label>
                <Input
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="First Name"
                  required
                  className={clsx(
                    "mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
                    "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                  )}
                />
              </Field>
              <Field className="md:w-1/2 mt-5 md:mt-0">
                <Label className="text-sm/6 font-medium text-white">
                  Last Name (required)
                </Label>
                <Input
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Last Name"
                  required
                  className={clsx(
                    "mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
                    "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                  )}
                />
              </Field>
            </div>
            <Field>
              <Label className="text-sm/6 font-medium text-white">
                Email address (required)
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="email@yourdomain.com"
                required
                className={clsx(
                  "mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
                  "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                )}
              />
            </Field>
            <Field>
              <Label className="text-sm/6 font-medium text-white">
                Phone number
              </Label>
              <Input
                type="text"
                id="phone"
                name="phone"
                placeholder="209-123-4567"
                className={clsx(
                  "mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
                  "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                )}
              />
            </Field>
            <Field>
              <Label className="text-sm/6 font-medium text-white">
                Message (required)
              </Label>
              <Description className="text-sm/6 text-white/50">
                Tell me more about you and what you hope to achieve through the
                BIE process.
              </Description>
              <Textarea
                id="message"
                name="message"
                placeholder="Enter your message here."
                required
                className={clsx(
                  "mt-3 block w-full resize-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
                  "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                )}
                rows={3}
              />
            </Field>
            <Field>
              <Label className="text-sm/6 font-medium text-white">
                Services (required)
              </Label>
              <Description className="text-sm/6 text-white/50">
                What service are you inquiring about?
              </Description>
              <div className="relative">
                <Select
                  id="services"
                  name="services"
                  required
                  className={clsx(
                    "mt-3 block w-full appearance-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
                    "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
                    // Make the text of each option black on Windows
                    "*:text-black"
                  )}
                >
                  <option>Free Consult Call</option>
                  <option>Schedule Initial Visit ($185)</option>
                  <option>Schedule a Follow Up Visit ($85)</option>
                  <option>Interested in Packages</option>
                </Select>
                <ChevronDownIcon
                  className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
                  aria-hidden="true"
                />
              </div>
            </Field>
            <Button
              type="submit"
              className="rounded bg-color1 py-2 px-4 text-sm text-white hover:bg-color3 ease-in-out duration-200"
            >
              Let&apos;s get well!
            </Button>
          </Fieldset>
        </form>
      </section>
      <section className="bg-color4/10 py-10">
        <h3 className="text-color1 text-5xl text-center font3 mb-5">
          Clinic Location
        </h3>
        <div className="flex flex-col md:flex-row max-w-screen-2xl mx-auto">
          <Link
            href="https://maps.app.goo.gl/otoE1X1iBrQAHv9G8"
            target="_blank"
            className="md:w-1/2"
          >
            <CldImage
              width="500"
              height="500"
              src="https://res.cloudinary.com/dx97fht5v/image/upload/v1728434869/Valley_Allergy_Wellness_Office_Parking_yk939q.jpg"
              sizes="100vw"
              alt="parking map of the clinic"
              className="object-scale-down mx-auto md:ml-auto md:mr-5"
            />
            <CldImage
              width="500"
              height="500"
              src="https://res.cloudinary.com/dx97fht5v/image/upload/v1730080688/vaw-google-map-ss_icj74m.png"
              sizes="100vw"
              alt="google map view of the clinic"
              className="object-scale-down mx-auto md:ml-auto md:mr-5"
            />
          </Link>
          <div className="md:w-1/2 flex flex-col mx-auto md:ml-5 space-y-3 px-5 md:px-0">
            <h3 className="text-color1 text-lg pt-5 md:pt-0">Address:</h3>
            <a
              className="hover:text-color4 text-sm px-5"
              href="https://maps.app.goo.gl/otoE1X1iBrQAHv9G8"
              target="_blank"
            >
              <p>2291 W March Lane</p>
              <p>Building A, Suite A101</p>
              <p>Stockton, CA 95207</p>
            </a>
            <h3 className="text-color1 text-lg pt-3">Directions:</h3>
            <ul className="px-5 text-sm space-y-4">
              <li>
                The directions will likely have you turn onto&nbsp;
                <strong>Quail Lakes Plaza</strong>.
              </li>
              <li>
                When you are on Quail Lakes Plaza, continue straight until you
                see the round-about and Arroyo&apos;s Restaurant on the left
                side.
              </li>
              <li>
                There is parking on both sides of the round-about, including
                several visitor (green) parking spaces.
              </li>
              <li>My office is in Building A, Suite A101.</li>
              <li>
                The entrance door faces the lake and is adjacent to the Stockton
                Teachers Association.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Script scr="https://smtpjs.com/v3/smtp.js"></Script>
      <Script src="ContactForm.js"></Script>
    </main>
  );
}

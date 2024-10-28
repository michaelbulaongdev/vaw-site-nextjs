"use client";

import Link from "next/link";
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
                className={clsx(
                  "mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
                  "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                )}
              />
            </Field>
            <Field className="md:w-1/2">
              <Label className="text-sm/6 font-medium text-white">
                Last Name (required)
              </Label>
              <Input
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
          <Button className="rounded bg-color1 py-2 px-4 text-sm text-white hover:bg-color3 ease-in-out duration-200">
            Let&apos;s get well!
          </Button>
        </Fieldset>
      </section>
      <section className="bg-color4/10">
        <div className="flex flex-col md:flex-row px-5 py-10 max-w-screen-2xl mx-auto">
          <div className="md:w-1/2">
            <h3 className="text-color1 text-3xl text-center">Location</h3>
            <CldImage
              width="600"
              height="800"
              src="https://res.cloudinary.com/dx97fht5v/image/upload/v1728434869/Valley_Allergy_Wellness_Office_Parking_yk939q.jpg"
              sizes="100vw"
              alt="profile photo of deborah"
              className="p-5 object-scale-down mx-auto"
            />
          </div>
          <div className="md:w-1/2 flex flex-col lg:px-20">
            <h3 className="text-color1 text-3xl text-center">Directions</h3>
            <p className="lg:text-lg my-5 lg:my-10 text-center text-color1">
              The directions will likely have you turn onto&nbsp;
              <strong>Quail Lakes Plaza</strong>.
            </p>
            <ul className="bg-color3/10 p-5 text-sm space-y-5">
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
    </main>
  );
}

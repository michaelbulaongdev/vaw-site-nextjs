"use client";

import { CldImage } from "next-cloudinary";
import Link from "next/link";

export default function TheoryBehindPage() {
  return (
    <main className="flex flex-col">
      <section className="bg-color4/10">
        <div className="flex flex-col md:flex-row p-5 max-w-screen-2xl mx-auto">
          <div className="md:w-1/2">
            <h2>What is BIE?</h2>
            <p>
              <strong>Bioenergetic Intolerance Elimination (BIE)</strong>,
              founded in 1998, is an effective, non-invasive modality that
              enables one’s body to recognize sensitivities or intolerances
              using energetic frequencies. Without the use of needles or drugs,
              BIE assists the body in recovering from symptoms associated with
              the intolerances.
            </p>
          </div>
          <div className="md:w-1/2 bg-cover bg-[url(https://res.cloudinary.com/dx97fht5v/image/upload/v1729433270/grass-image_vzapu2.jpg)]">
            <Link
              href="/theory-behind-bie"
              className="mt-5 py-2 px-5 rounded-lg border border-3 border-color1 bg-color1 text-white text-xs text-center font-bold hover:bg-transparent hover:text-color1 ease-in-out duration-200"
            >
              <button>Read the Theory Behind BIE</button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

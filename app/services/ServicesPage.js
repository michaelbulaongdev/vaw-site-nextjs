'use client';

import {CldImage} from 'next-cloudinary';
import Link from 'next/link';

export default function ServicesPage() {
	return (
		<main className='flex flex-col'>
			{/* <section
        id="what-to-expect"
        className="bg-cover bg-[url(https://res.cloudinary.com/dx97fht5v/image/upload/v1729993601/Sunlight_cs8fou.jpg)] p-5 md:p-10"
      >
        <div className="max-w-screen-2xl mx-auto">
          <h2 className="bg-white/50 text-color1 mx-auto p-5 text-3xl lg:text-4xl text-center rounded-tl-3xl rounded-br-3xl lg:rounded-tl-full lg:rounded-br-full">
            When working with me, you can expect…
          </h2>
          <ul className="text-lg md:text-2xl max-w-2xl mx-auto text-left text-color1 space-y-7 p-5 md:p-10 mt-5 md:mt-10 bg-white/50 italic">
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
        </div>
      </section>
      <section className="bg-color4/10">
        <div className="flex flex-col lg:flex-row py-5 md:py-10 px-5 max-w-screen-2xl mx-auto">
          <h2 className="p-10 text-center lg:text-right text-2xl md:text-3xl lg:w-2/5">
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
      <section className="p-5 lg:p-10 bg-color3/10">
        <h2 className="font3 text-3xl xl:text-4xl text-center font-normal">
          Can you imagine this transformation for yourself or a loved one?
        </h2>
        <div className="flex flex-col md:flex-row max-w-screen-2xl mx-auto">
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
      </section> */}
			<section
				id='rates'
				className='bg-cover bg-[url(https://res.cloudinary.com/dx97fht5v/image/upload/v1729433270/grass-image_vzapu2.jpg)] flex flex-col md:flex-row'>
				<div className='py-16 px-5 text-center mx-auto w-full bg-black/10'>
					<h2 className='px-5 md:px-10 mb-10 font2 text-white text-4xl md:text-5xl'>
						OUR SERVICES
					</h2>
					<div className='flex flex-col space-y-10 md:space-y-0 md:space-x-5 lg:space-x-0 md:flex-row lg:divide-x max-w-screen-2xl mx-auto'>
						<div className='md:w-1/2'>
							<div className='flex flex-col max-w-xs h-full mx-auto bg-white/90 rounded-2xl p-7 justify-between shadow-lg'>
								<div className='space-y-5'>
									<h3 className='text-color1 text-2xl font2 font-bold'>
										INITIAL VISIT
									</h3>
									<p className='bg-color1 text-white text-xl w-24 mx-auto p-1 rounded-3xl'>
										$185
									</p>
									<ul className='list-disc mx-5 lg:mx-14 text-left'>
										<li>1 - 1.5 hours</li>
										<li>Muscle testing for homeostatic imbalances</li>
										<li>
											Balancing of up to 4 different categories of stressors
										</li>
									</ul>
								</div>
								<div className='mt-5 md:mt-0'>
									<Link
										href='/what-is-bie#what-to-expect'
										className='py-2 px-5 mx-auto rounded-lg border border-3 border-color1 bg-color1 text-white text-base hover:bg-transparent hover:text-color1 ease-in-out duration-200'>
										LEARN MORE
									</Link>
								</div>
							</div>
						</div>
						<div className='md:w-1/2'>
							<div className='max-w-xs h-full mx-auto bg-white/90 rounded-2xl p-7 space-y-5 shadow-lg'>
								<h3 className='text-color1 text-2xl font2 font-bold'>
									FOLLOW-UP VISITS
								</h3>
								<p className='bg-color1 text-white text-xl w-24 mx-auto p-1 rounded-3xl'>
									$85
								</p>
								<ul className='list-disc mx-5 lg:mx-14 text-left'>
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
										href='/what-is-bie#what-to-expect'
										className='py-2 px-5 mx-auto rounded-lg border border-3 border-color1 bg-color1 text-white text-base hover:bg-transparent hover:text-color1 ease-in-out duration-200'>
										LEARN MORE
									</Link>
								</div>
							</div>
						</div>
					</div>
					<p className='mx-10 pt-10 text-white text-2xl'>
						Ask about our packaged service bundles!
					</p>
				</div>
			</section>
			<section className='bg-color2/10'>
				<div className=' p-10 space-y-5 max-w-screen-2xl mx-auto text-center'>
					<h2 className='text-3xl'>Payment</h2>
					<p className='text-xl'>
						We accept cash, credit/debit cards, and FSA/HSA cards.
					</p>
				</div>
			</section>
			<section className='bg-color4/10'>
				<div className='max-w-screen-2xl mx-auto p-10 space-y-5 flex flex-col'>
					<div className='mx-auto text-center text-xl md:text-4xl'>
						<p>Are you ready to embark on a</p>
						<p>new path towards relief?</p>
					</div>
					<button className='mx-auto px-5 py-2 rounded-lg border border-3 border-color1 bg-color1 text-white text-lg hover:bg-white hover:border-color hover:text-color1 ease-in-out duration-200'>
						<Link
							href='https://squareup.com/appointments/book/k5xabxhqoc83g2/L5QGYQW5FHNP6/start'
							target='_blank'
							className=''>
							Click here to setup your first visit!
						</Link>
					</button>
				</div>
			</section>
		</main>
	);
}

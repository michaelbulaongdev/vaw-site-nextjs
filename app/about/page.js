'use client';

import {CldImage} from 'next-cloudinary';
import Link from 'next/link';

export default function Home() {
	return (
		<main className='flex flex-col'>
			<section className='flex flex-col md:flex-row'>
				<div className='md:w-1/2'>
					<h1>Hi! I&apos;m Deborah!</h1>
					<h2>Owner & Registered BioEnergetic</h2>
					<h2>Intolerance Eliminationo Practitioner</h2>
					<hr></hr>
					<p>
						My interest in health and wellness began shortly after my mom was
						diagnosed with stage IV colon cancer. Her desire to pursue
						alternative health treatments gave me an opportunity to learn more
						about non-conventional treatments and ultimately lead me to obtain a
						degree in Holistic Health and Wellness in 2007. My goal after
						graduating was to open a health consulting business, however, not
						only was I a recent graduate, but I was also newly engaged and
						needing a stable income to pay for the upcoming wedding! I entered
						the world of government work with a temporary position with the San
						Joaquin County. A year later, I accepted a permanent position with
						the State of California and had an awesome wedding!
					</p>
				</div>
				<div className='md:w-1/2'>
					<CldImage
						width='600'
						height='800'
						src='https://res.cloudinary.com/dx97fht5v/image/upload/v1728429001/about-profile-pic_vddfln.png'
						sizes='100vw'
						alt='profile photo of deborah'
						className='w-full p-10 object-scale-down mx-auto'
					/>
				</div>
			</section>
			<section>
				<h3>
					&quot;I saw a way for me to bring my passion for helping others and my
					obsession with health into a place of purpose&quot;
				</h3>
			</section>
			<section>
				<p>
					Working for the government has a LOT of great benefits… benefits that
					are difficult to walk away from. The stability and steady stream of
					income helped us purchase our first home, grow our family and pay for
					two international adoptions. Little by little, the goals and dreams of
					owning something of my own faded but I never lost my interest in
					health. To be frank, I am downright OBSESSED with biohacking! I love
					to read articles, listen to podcasts, and go down rabbit holes of
					research to learn more about how to optimize my health and the health
					of my family. My family’s history is quite significant for cancer. My
					mom ultimately lost her battle with cancer in 2009. The pain of losing
					my mom, having to learn how to be a mom without her left me with deep
					wounds. My life’s goal following the loss was to NOT get cancer, to
					not to leave this world and my children too early. It sounds a bit
					morbid, but it was the driving factor for learning all that I could
					about health so I could live a long and healthy life with my family.
					I’d say that my health is my most expensive “hobby” as I am always
					trying a new supplement or health modality whenever financially
					possible!
				</p>
			</section>
			<section>
				<p>
					While working for the State had its benefits, it also had its
					challenges. The last 5 years of my career were the most difficult to
					endure. I lacked passion and purpose in my work, something I deeply
					desired for myself. I went through something I equated to a mid-life
					crisis before finally deciding that I needed a change. In June of
					2022, I took a leap of faith and quit! I didn’t know what the future
					would hold, but I was trusting that God would be with me as I figured
					it out. In pursuing yet another health modality for myself (it’s my
					hobby, remember? 😊), I discovered BIE. I found BIE to be such a
					powerful, yet gentle application that could provide relief and healing
					to so many that I knew I had to learn more. I saw a way for me to
					bring my passion for helping others and my obsession with health into
					a place of purpose. And so began the resurrection of dreams long
					forgotten and given up on! I became licensed and registered as a BIE
					practitioner with the Institute of Natural Health Technologies in
					November of 2022 and my practice Valley Allergy + Wellness was born!
				</p>
			</section>
			<section>
				<p>
					If you have gotten this far down in reading my story, first of all, I
					want to say thank you, and second, I want to encourage you to never
					give up on your goals and dreams. Whether you’re hoping for a new job,
					a new house, a child, to overcome a health challenge, whatever it is…
					believe that it CAN and WILL come to fruition!
				</p>
			</section>
			<section>
				<p>
					Thank you for your interest in BIE and for stopping by to learn more
					about me and my story!
				</p>
			</section>
		</main>
	);
}

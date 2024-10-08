'use client';

import {CldImage} from 'next-cloudinary';
import Link from 'next/link';
import {homeList1} from './textContent';
import {Carousel} from '@material-tailwind/react';

export default function Home() {
	return (
		<main className='flex flex-col'>
			<section className='bg-cover bg-[url(https://res.cloudinary.com/dx97fht5v/image/upload/v1728055039/AdobeStock_85532144_fuq6m0.jpg)] flex flex-col md:flex-row'>
				<div className='py-36 text-center mx-auto md:w-screen bg-black/10'>
					<h1 className='px-10 font2 text-white text-5xl lg:text-7xl max-w-5xl mx-auto leading-tight'>
						Root cause solutions for everyday health problems
					</h1>
					<p className='text-white p-10 text-lg lg:text-2xl'>
						BIOENERGETIC INTOLERANCE ELIMINATION &#40;B.I.E.&#41;
					</p>
					<div className='px-5'>
						<Link
							href='/'
							className='py-2 px-5 rounded-lg border border-3 border-white bg-black/10 text-white text-lg hover:bg-white hover:text-color5 ease-in-out duration-200'>
							Learn More About B.I.E.
						</Link>
					</div>
				</div>
			</section>
			<section className='bg-white flex flex-col-reverse md:flex-row'>
				<div className='md:w-1/2 min-h-screen bg-cover bg-color4/75 bg-[url(https://res.cloudinary.com/dx97fht5v/image/upload/v1727247985/1_zvmvj3.png)]'></div>
				<div className='md:w-1/2 p-5 md:p-10 self-center'>
					<h2 className='font2 p-5 text-color1 text-2xl lg:text-3xl'>
						If you&apos;re looking for a way to balance and improve:
					</h2>
					<ul className='pl-5'>
						{homeList1.map((item, index) => (
							<li
								key={index}
								className='flex flex-row space-x-5 text-md lg:text-lg text-color1 py-1'>
								<p>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										height='24px'
										viewBox='0 -960 960 960'
										width='24px'
										fill='#444373'>
										<path d='m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z' />
									</svg>
								</p>
								<p>{item}</p>
							</li>
						))}
					</ul>
					<p className='p-5 text-color1 text-xl lg:text-2xl'>
						<span className='font2 font-bold'>
							Bioenergetic Intolerance Elimination &#40;B.I.E.&#41;
						</span>
						&nbsp; may be the answer for YOU!
					</p>
				</div>
			</section>
			<section className='bg-white flex flex-col md:flex-row'>
				<div className='md:w-1/2 p-10 self-center'>
					<h2 className='font2 text-color1 text-3xl md:text-4xl'>
						The BEST part?
					</h2>
					<h2 className='font2 text-color1 text-3xl md:text-4xl'>
						<span className='underline'>NO</span> needles are involved!
					</h2>
					<p className='my-5 lg:my-10 text-color1 lg:text-lg'>
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
					<div>
						<Link
							href='https://book.squareup.com/appointments/k5xabxhqoc83g2/location/L5QGYQW5FHNP6/services'
							className='py-2 px-5 rounded-lg border border-3 border-white bg-color1 text-white text-lg hover:bg-white hover:border-color1 hover:text-color1 ease-in-out duration-200'>
							BOOK YOUR APPOINTMENT TODAY
						</Link>
					</div>
				</div>
				<div className='md:w-1/2 min-h-screen bg-cover bg-color4/75 bg-[url(https://res.cloudinary.com/dx97fht5v/image/upload/v1727247985/2_zyurnh.png)]'></div>
			</section>
			<section
				id='services'
				className='bg-cover bg-[url(https://res.cloudinary.com/dx97fht5v/image/upload/v1726006464/pexels-jplenio-1423601_bsdnb4.jpg)] flex flex-col md:flex-row'>
				<div className='py-16 px-5 text-center mx-auto w-full bg-black/10'>
					<h2 className='px-10 mb-10 font2 text-white text-5xl'>
						OUR SERVICES
					</h2>
					<div className='flex flex-col space-y-10 md:space-y-0 md:flex-row md:divide-x'>
						<div className='md:w-1/2'>
							<div className='flex flex-col max-w-xs h-full mx-auto bg-white/90 rounded-2xl p-5 justify-between'>
								<div className='space-y-5'>
									<h3 className='text-color1 text-2xl font2 font-bold'>
										INITIAL VISIT
									</h3>
									<p className='bg-color1 text-white text-xl w-24 mx-auto p-1 rounded-3xl'>
										$185
									</p>
									<ul className='list-disc mx-14 text-left'>
										<li>1 - 1.5 hours</li>
										<li>Muscle testing for homeostatic imbalances</li>
										<li>
											Balancing of up to 4 different categories of stressors
										</li>
									</ul>
								</div>
								<div>
									<Link
										href='/'
										className='py-2 px-5 mx-auto rounded-lg border border-3 border-color1 bg-color1 text-white text-base hover:bg-transparent hover:text-color1 ease-in-out duration-200'>
										LEARN MORE
									</Link>
								</div>
							</div>
						</div>
						<div className='md:w-1/2'>
							<div className='max-w-xs h-full mx-auto bg-white/90 rounded-2xl p-5 space-y-5'>
								<h3 className='text-color1 text-2xl font2 font-bold'>
									FOLLOW-UP VISITS
								</h3>
								<p className='bg-color1 text-white text-xl w-24 mx-auto p-1 rounded-3xl'>
									$85
								</p>
								<ul className='list-disc mx-14 text-left'>
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
										href='/'
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
			<section className='flex flex-col md:flex-row'>
				<CldImage
					width='600'
					height='800'
					src='https://res.cloudinary.com/dx97fht5v/image/upload/v1726009247/dchan-1_dxsjdf.png'
					sizes='100vw'
					alt='profile photo of deborah'
					className='md:w-1/2 lg:w-2/5 p-10 object-scale-down mx-auto'
				/>
				<div className='md:w-1/2 lg:w-3/5 p-10 flex flex-col justify-center lg:px-20 xl:px-32'>
					<CldImage
						width='50'
						height='50'
						src='https://res.cloudinary.com/dx97fht5v/image/upload/v1728259824/quotes_jjoofq.png'
						sizes='100vw'
						alt='quotation mark'
						className='mx-auto'
					/>
					<p className='lg:text-lg my-5 lg:my-10 text-center text-color1'>
						My mission at Valley Allergy + Wellness is to assist YOU in your
						pursuit for health and wellness and to empower you to connect to
						yourself - in mind, body, and spirit and THRIVE! My goal is to
						provide you with a safe and welcoming space to share your story,
						find healing, and give you hope for tomorrow.
					</p>
					<p className='text-sm text-center text-color1 bg-gray-200'>
						— <span className='font2'>DEBORAH CHAN</span>, Owner
					</p>
				</div>
			</section>
			<section className='bg-color2/70 text-white text-center py-10'>
				<h2 className='font2 text-white text-5xl lg:text-6xl text-center p-5'>
					Client Love
				</h2>
				<Carousel>
					<div className='w-full min-h-96 flex align-middle justify-center p-10'>
						<div className='flex flex-col border border-white p-10 justify-center space-y-10 mx-10 max-w-96'>
							<p className='italic text-xs'>
								&quot;Before the treatment with Deborah yesterday I was stressed
								to the max! After the session, over the next hour it was a
								subtle change. I just felt like I could resume normal life and
								not have my thoughts occupied by the doom and gloom. I felt calm
								and relaxed and when the negative thoughts came back I was able
								to replace them with positive ones very easily. Something that
								wasn&apos;t even possible before the treatment! That&apos;s huge
								for me! Now I want to get more of the emotional work done!&quot;
							</p>
							<p className='uppercase text-lg'>patrick m.</p>
						</div>
					</div>
					<div className='w-full h-96 flex align-middle justify-center p-10'>
						<div className='flex flex-col border border-white p-10 justify-center space-y-10 mx-10 max-w-96'>
							<p className='italic text-xs'>
								&quot;Deborah Chan is a delight to work with and I highly
								recommend her service for anybody suffering from allergies or
								any other imbalances in their system!&quot;
							</p>
							<p className='uppercase text-lg'>vicki p.</p>
						</div>
					</div>
					<div className='w-full h-96 flex align-middle justify-center p-10'>
						<div className='flex flex-col border border-white p-10 justify-center space-y-10 mx-10 max-w-96'>
							<p className='italic text-xs'>
								&quot;For years now I&apos;ve had food sensitivities but the
								real struggle has been with sugar! Deb didn&apos;t disappoint.
								Very king and explained the process before the appointment. One
								day I realized I wasn&apos;t even craving my favorite candy. I
								couldn&apos;t wait to thank her & let her know about my new
								found FREEDOM!&quot;
							</p>
							<p className='uppercase text-lg'>angi s.</p>
						</div>
					</div>
				</Carousel>
			</section>
		</main>
	);
}

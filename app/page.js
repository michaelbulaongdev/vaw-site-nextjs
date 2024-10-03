'use client';

import {CldImage} from 'next-cloudinary';
import Link from 'next/link';
import {homeList1} from './textContent';

export default function Home() {
	return (
		<main className='flex flex-col'>
			<section className='bg-cover bg-[url(https://res.cloudinary.com/dx97fht5v/image/upload/v1726706959/sunrise-adobe-preview_bx3f2z.png)] flex flex-col md:flex-row'>
				<div className='py-40 text-center mx-auto w-screen bg-black/10'>
					<h1 className='pt-10 px-10 font2 text-white text-6xl lg:text-8xl'>
						Relief starts here.
					</h1>
					<p className='text-white p-10 text-lg lg:text-2xl'>
						BIOENERGETIC INTOLERANCE ELIMINATION &#40;B.I.E.&#41;
					</p>
					<div className='px-5'>
						<button className='py-2 px-5 rounded-lg border border-3 border-white bg-black/10 text-white text-lg hover:bg-white hover:text-color5 ease-in-out duration-200'>
							<Link href='/'>Learn More About B.I.E.</Link>
						</button>
					</div>
				</div>
			</section>
			<section className='bg-white flex flex-col-reverse md:flex-row'>
				<CldImage
					width='800'
					height='800'
					src='https://res.cloudinary.com/dx97fht5v/image/upload/v1727247985/1_zvmvj3.png'
					sizes='100vw'
					alt='BIE demonstration photo'
					priority={true}
					className='md:w-1/2 object-scale-down bg-color2'
				/>
				<div className='md:w-1/2 p-5 md:p-10 self-center'>
					<h2 className='font2 p-5 text-color1 text-2xl lg:text-3xl xl:text-4xl'>
						If you&apos;re looking for a way to balance and improve:
					</h2>
					<ul className='pl-5 md:pl-10'>
						{homeList1.map((item, index) => (
							<li
								key={index}
								className='flex flex-row space-x-5 text-md xl:text-xl text-color1 py-1'>
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
				</div>
			</section>
			<section className='bg-white flex flex-col md:flex-row'>
				<div className='md:w-1/2 p-5 md:p-10 self-center'>
					<h2 className='font2 p-5 text-color1 text-4xl'>
						The BEST part? <span className='underline'>NO</span> needles are
						involved!
					</h2>
					<p className='text-color1'>
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
					<div className='p-5'>
						<button className='py-2 px-5 rounded-lg border border-3 border-white bg-color1 text-white text-lg hover:bg-white hover:border-color1 hover:text-color1 ease-in-out duration-200'>
							<Link href='/'>BOOK YOUR APPOINTMENT TODAY</Link>
						</button>
					</div>
				</div>
				<CldImage
					width='800'
					height='800'
					src='https://res.cloudinary.com/dx97fht5v/image/upload/v1727247985/2_zyurnh.png'
					sizes='100vw'
					alt='BIE demonstration photo'
					priority={true}
					className='md:w-1/2 object-scale-down bg-color2'
				/>
			</section>
			<section className='bg-cover bg-[url(https://res.cloudinary.com/dx97fht5v/image/upload/v1726006464/pexels-jplenio-1423601_bsdnb4.jpg)] flex flex-col md:flex-row'>
				<div className='py-16 text-center mx-auto w-full bg-black/10'>
					<h2 className='px-10 mb-16 font2 text-white text-5xl'>
						OUR SERVICES
					</h2>
					<div className='flex flex-col space-y-10 md:space-y-0 md:flex-row md:divide-x'>
						<div className='md:w-1/2'>
							<div className='flex flex-col max-w-xs h-full mx-auto bg-white/90 rounded-2xl p-5 justify-between'>
								<div className='space-y-5'>
									<h3 className='text-color1 text-2xl font-bold'>
										INITIAL VISIT
									</h3>
									<p className='bg-color1 text-white text-xl w-24 mx-auto p-2 rounded-3xl'>
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

								<button className='py-2 px-5 mt-5 md:mt-0 mx-auto rounded-lg border border-3 border-color1 bg-color1 text-white text-base hover:bg-transparent hover:text-color1 ease-in-out duration-200'>
									<Link href='/'>LEARN MORE</Link>
								</button>
							</div>
						</div>
						<div className='md:w-1/2'>
							<div className='max-w-xs h-full mx-auto bg-white/90 rounded-2xl p-5 space-y-5'>
								<h3 className='text-color1 text-2xl font-bold'>
									FOLLOW-UP VISITS
								</h3>
								<p className='bg-color1 text-white text-xl w-24 mx-auto p-2 rounded-3xl'>
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
								<button className='py-2 px-5 rounded-lg border border-3 border-color1 bg-color1 text-white text-base hover:bg-transparent hover:text-color1 ease-in-out duration-200'>
									<Link href='/'>LEARN MORE</Link>
								</button>
							</div>
						</div>
					</div>
					<p className='m-8 text-white text-2xl'>
						Ask about our packaged service bundles!
					</p>
				</div>
			</section>
		</main>
	);
}

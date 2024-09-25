'use client';

import {CldImage} from 'next-cloudinary';
import Link from 'next/link';
import {homeList1} from './textContent';

export default function Home() {
	return (
		<main className='flex flex-col'>
			<section className='bg-cover bg-[url(https://res.cloudinary.com/dx97fht5v/image/upload/v1726706959/sunrise-adobe-preview_bx3f2z.png)] flex flex-col md:flex-row 2xl:px-5'>
				<div className='py-40 text-center mx-auto w-screen bg-black/10'>
					<h1 className='pt-10 px-10 font2 text-white text-6xl lg:text-8xl'>
						Relief starts here.
					</h1>
					<p className='text-white p-10 text-lg lg:text-2xl'>
						BIOENERGETIC INTOLERANCE ELIMINATION (B.I.E.)
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
					width='500'
					height='500'
					src='https://res.cloudinary.com/dx97fht5v/image/upload/v1727247985/1_zvmvj3.png'
					sizes='100vw'
					alt='BIE demonstration photo'
					priority={true}
					className='mx-auto md:w-1/2 object-scale-down'
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
						Working with Valley Allergy + Wellness will involve{' '}
						<strong>Bioenergetic Intolerance Elimination (B.I.E.)</strong>, a
						practice that uses energetic frequencies to identify the stressor(s)
						that are causing a negative reaction within your body. Once these
						stressors are identified, balance is then restored by using a safe,
						non-invasive patented device to re- introduce the frequencies to 16
						acupuncture points across the body.
					</p>
					<div className='p-5'>
						<button className='py-2 px-5 rounded-lg border border-3 border-white bg-color1 text-white text-lg hover:bg-white hover:border-color1 hover:text-color1 ease-in-out duration-200'>
							<Link href='/'>BOOK YOUR APPOINTMENT TODAY</Link>
						</button>
					</div>
				</div>
				<CldImage
					width='500'
					height='500'
					src='https://res.cloudinary.com/dx97fht5v/image/upload/v1727247985/2_zyurnh.png'
					sizes='100vw'
					alt='BIE demonstration photo'
					priority={true}
					className='mx-auto md:w-1/2 object-scale-down'
				/>
			</section>
			<section className='bg-cover bg-[url(https://res.cloudinary.com/dx97fht5v/image/upload/v1726006464/pexels-jplenio-1423601_bsdnb4.jpg)] flex flex-col md:flex-row 2xl:px-5'>
				<div className='py-40 text-center mx-auto w-screen bg-black/30'>
					<h2 className='pt-10 px-10 font2 text-white text-4xl'>
						OUR SERVICES
					</h2>
				</div>
			</section>
		</main>
	);
}

'use client';

import {CldImage} from 'next-cloudinary';
import Link from 'next/link';

export default function Home() {
	return (
		<main className='flex flex-col'>
			<section className='bg-cover bg-[url(https://res.cloudinary.com/dgcyevbkb/image/upload/v1725923135/banner_lnvzpw.png)] flex flex-col md:flex-row 2xl:px-5'>
				<div className='py-10 text-center'>
					<h1 className='backdrop-blur-sm bg-black/30 font2 font-bold py-5 px-10 md:px-36 text-white text-6xl md:text-8xl'>
						Your Image is Your Message!
					</h1>
					<div className='px-5 pt-5'>
						<button className='py-3 px-8 rounded-3xl border border-color2 bg-color2 text-white hover:bg-color5 hover:text-color2 ease-in-out duration-200'>
							<Link href='/about-mafae'>WORK WITH US</Link>
						</button>
					</div>
				</div>
			</section>
			<section className='bg-white flex flex-col md:flex-row'>
				<CldImage
					width='500'
					height='500'
					src='https://res.cloudinary.com/dgcyevbkb/image/upload/v1720496946/myb-banner-photos_ulny0p.png'
					sizes='100vw'
					alt='mafae banner photos'
					priority={true}
					className='mx-auto px-5 pb-10 md:p-10 md:w-1/2 lg:w-2/5 object-scale-down'
				/>
				<div className='md:w-1/2 lg:w-3/5 p-5 md:p-10 self-center'>
					<h2 className='font2 p-5 text-color2 text-5xl md:text-6xl lg:text-7xl'>
						Welcome!
					</h2>
					<p className='p-5 text-black text-lg md:text-xl'>
						<strong>Mafae Management Consultancy, LLC</strong> is a company
						dedicated to empowering individuals & businesses in entertainment,
						special events, talent management, content creation, digital and
						traditional marketing and public relations in working together to
						turn their dreams into reality. Founded in the year 2015 by Mafae
						Yunon-Belasco, the company continues on its mission to be of service
						to companies and individuals everywhere.
					</p>
				</div>
			</section>
		</main>
	);
}

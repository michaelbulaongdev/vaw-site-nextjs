'use client';

import Link from 'next/link';
import {CldImage} from 'next-cloudinary';

export default function ContactPage() {
	return (
		<main className='flex flex-col'>
			<section className='bg-[url(https://res.cloudinary.com/dx97fht5v/image/upload/v1728055039/AdobeStock_85532144_fuq6m0.jpg)]'>
				<div className='max-w-screen-2xl mx-auto py-10 text-center space-y-5'>
					<h2 className='text-white text-4xl md:text-5xl'>
						Let&apos;s connect and get you well!
					</h2>
					<p className='text-white text-lg md:text-2xl max-w-screen-lg mx-auto'>
						If you have additional questions not addressed on our&nbsp;
						<Link
							href='/faq'
							className='bg-white/10 hover:underline hover:text-color3'>
							FAQ Page
						</Link>
						, you can contact us by filling out the form below.
					</p>
				</div>
			</section>
			<section className='bg-color4/10'>
				<div className='flex flex-col md:flex-row px-5 py-10 max-w-screen-2xl mx-auto'>
					<div className='md:w-1/2'>
						<h3 className='text-color1 text-3xl text-center'>Location</h3>
						<CldImage
							width='600'
							height='800'
							src='https://res.cloudinary.com/dx97fht5v/image/upload/v1728434869/Valley_Allergy_Wellness_Office_Parking_yk939q.jpg'
							sizes='100vw'
							alt='profile photo of deborah'
							className='p-5 object-scale-down mx-auto'
						/>
					</div>
					<div className='md:w-1/2 flex flex-col lg:px-20'>
						<h3 className='text-color1 text-3xl text-center'>Directions</h3>
						<p className='lg:text-lg my-5 lg:my-10 text-center text-color1'>
							The directions will likely have you turn onto&nbsp;
							<strong>Quail Lakes Plaza</strong>.
						</p>
						<ul className='bg-color3/10 p-5 text-sm space-y-5'>
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

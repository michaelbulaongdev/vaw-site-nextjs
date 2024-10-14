'use client';

import Link from 'next/link';
import {formsButton} from '../styles';

export default function Forms() {
	return (
		<main className='flex flex-col'>
			<section className='flex flex-col md:flex-row p-5 bg-gradient-to-b from-color4/50 to-transparent'>
				<div className='md:w-1/2 space-y-5 p-5'>
					<h1 className='font2 text-5xl'>Let&apos;s make it official!</h1>
					<div className='p-3 md:p-5 space-y-3'>
						<h2 className='font-normal text-2xl'>
							Simple click on each of the boxes and fill them out online.
						</h2>
						<h2 className='font-normal text-2xl'>
							Complete all <strong>4</strong>&nbsp;forms <strong>prior</strong>
							&nbsp;to your first session!
						</h2>
					</div>
					<div className='p-3 md:p-5'>
						<h3 className='text-xl'>Have a question about the forms?</h3>
						<h3>
							Contact me via{' '}
							<Link
								href='mailto:ValleyAllergyAndWellness@outlook.com'
								className='hover:underline hover:text-color3 text-color5 font-bold'>
								email
							</Link>
							&nbsp;or&nbsp;
							<Link
								href='tel:+12097518676'
								className='hover:underline hover:text-color3 text-color5 font-bold'>
								phone
							</Link>
							.
						</h3>
					</div>
					<div className='p-3 md:p-5'>
						<h3 className='text-xl'>Want a sneak peek of my office?</h3>
						<button className='uppercase mt-5 py-1 px-3 border border-3 border-color1 bg-color1 text-white text-sm hover:bg-white hover:border-color1 hover:text-color1 ease-in-out duration-200'>
							<Link href='/contact'>click here</Link>
						</button>
					</div>
				</div>
				<div className='md:w-1/2 flex flex-col mx-auto space-y-10 p-5 lg:p-16 justify-center bg-cover bg-[url(https://res.cloudinary.com/dx97fht5v/image/upload/v1726005198/pexels-pixabay-66274_cdbvfd.jpg)]'>
					<button className='uppercase py-4 px-5 rounded-lg border border-3 border-color3 bg-color3 text-white lg:text-lg hover:bg-white hover:border-color1 hover:text-color1 ease-in-out duration-200'>
						<Link
							href='https://form.jotform.com/231097803601047'
							target='_blank'>
							new client form
						</Link>
					</button>
					<button className={formsButton}>
						<Link
							href='https://form.jotform.com/231098302441044'
							target='_blank'>
							informed consent form
						</Link>
					</button>
					<button className={formsButton}>
						<Link
							href='https://form.jotform.com/231097536375058'
							target='_blank'>
							client acknowledgement form
						</Link>
					</button>
					<button className={formsButton}>
						<Link
							href='https://form.jotform.com/241966487538070'
							target='_blank'>
							cancellation policy form
						</Link>
					</button>
				</div>
			</section>
			<section className='flex flex-col md:flex-row min-h-96 bg-gradient-to-b from-transparent to-color4/50'>
				<h2 className='md:w-1/2 p-5 lg:p-20 text-4xl lg:text-5xl font2'>
					BIE is new to you and have more questions?
				</h2>
				<div className='md:w-1/2 p-5 lg:p-20'>
					<p className='text-3xl lg:text-4xl mb-5'>
						You’re in luck! I LOVE talking about this stuff and learning with
						you.
					</p>
					<button className='py-2 px-5 rounded-lg border border-3 border-white bg-color1 text-white text-lg hover:bg-white hover:border-color1 hover:text-color1 ease-in-out duration-200'>
						<Link href='/contact'>Send me ALL your questions!</Link>
					</button>
				</div>
			</section>
		</main>
	);
}

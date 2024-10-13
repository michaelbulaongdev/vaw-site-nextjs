'use client';

import Link from 'next/link';

export default function Forms() {
	return (
		<main className='flex flex-col'>
			<section className=''>
				<div>
					<h1>Let&apos;s make it official</h1>
					<h2>
						Simple click on each of the boxes and fill them out online. Complete
						all <span>4</span>&nbsp;forms <span>prior</span>&nbsp;to your first
						session!
					</h2>
					<p>
						Have a question about the forms? Contact me via{' '}
						<Link
							href='mailto:ValleyAllergyAndWellness@outlook.com'
							className='underline text-color5 font-bold'>
							email
						</Link>
						&nbsp;or&nbsp;
						<Link
							href='tel:+12097518676'
							className='underline text-color5 font-bold'>
							phone
						</Link>
						.
					</p>
					<div>
						<p>Want a sneak peek of my office?</p>
						<button>Click here!</button>
					</div>
					<div className='flex flex-col'>
						<button className='py-2 px-5 rounded-lg border border-3 border-white bg-color1 text-white text-lg hover:bg-white hover:border-color1 hover:text-color1 ease-in-out duration-200'>
							<Link
								href='https://form.jotform.com/231097803601047'
								target='_blank'>
								new client form
							</Link>
						</button>
						<button className='py-2 px-5 rounded-lg border border-3 border-white bg-color1 text-white text-lg hover:bg-white hover:border-color1 hover:text-color1 ease-in-out duration-200'>
							<Link
								href='https://form.jotform.com/231098302441044'
								target='_blank'>
								informed consent form
							</Link>
						</button>
						<button className='py-2 px-5 rounded-lg border border-3 border-white bg-color1 text-white text-lg hover:bg-white hover:border-color1 hover:text-color1 ease-in-out duration-200'>
							<Link
								href='https://form.jotform.com/231097536375058'
								target='_blank'>
								client acknowledgement form
							</Link>
						</button>
						<button className='py-2 px-5 rounded-lg border border-3 border-white bg-color1 text-white text-lg hover:bg-white hover:border-color1 hover:text-color1 ease-in-out duration-200'>
							<Link
								href='https://form.jotform.com/241966487538070'
								target='_blank'>
								cancellation policy form
							</Link>
						</button>
					</div>
				</div>
			</section>
			<section>
				<h2>BIE is new to you and have more questions?</h2>
				<div>
					<p>
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

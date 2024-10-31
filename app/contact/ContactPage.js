'use client';

import Link from 'next/link';
import {CldImage} from 'next-cloudinary';
import {
	Description,
	Field,
	Fieldset,
	Input,
	Label,
	Select,
	Textarea,
	Button,
} from '@headlessui/react';
import {ChevronDownIcon} from '@heroicons/react/20/solid';
import clsx from 'clsx';

export default function ContactPage() {
	return (
		<main className='flex flex-col'>
			<section className='p-5 lg:p-10 bg-[url(https://res.cloudinary.com/dx97fht5v/image/upload/v1728055039/AdobeStock_85532144_fuq6m0.jpg)]'>
				<div className='max-w-screen-2xl mx-auto py-5 text-center space-y-5'>
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
				<form onSubmit=''>
					<Fieldset className='space-y-6 rounded-xl bg-white/5 p-6 sm:p-10 max-w-screen-md mx-auto'>
						<div className='flex flex-col md:flex-row md:space-x-5'>
							<Field className='md:w-1/2'>
								<Label className='text-sm/6 font-medium text-white'>
									First Name (required)
								</Label>
								<Input
									type='text'
									id='firstname'
									name='firstname'
									placeholder='First Name'
									required
									className={clsx(
										'mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
										'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
									)}
								/>
							</Field>
							<Field className='md:w-1/2 mt-5 md:mt-0'>
								<Label className='text-sm/6 font-medium text-white'>
									Last Name (required)
								</Label>
								<Input
									type='text'
									id='lastname'
									name='lastname'
									placeholder='Last Name'
									required
									className={clsx(
										'mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
										'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
									)}
								/>
							</Field>
						</div>
						<Field>
							<Label className='text-sm/6 font-medium text-white'>
								Email address (required)
							</Label>
							<Input
								type='email'
								id='email'
								name='email'
								placeholder='email@yourdomain.com'
								required
								className={clsx(
									'mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
									'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
								)}
							/>
						</Field>
						<Field>
							<Label className='text-sm/6 font-medium text-white'>
								Phone number
							</Label>
							<Input
								type='text'
								id='phone'
								name='phone'
								placeholder='209-123-4567'
								className={clsx(
									'mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
									'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
								)}
							/>
						</Field>
						<Field>
							<Label className='text-sm/6 font-medium text-white'>
								Message (required)
							</Label>
							<Description className='text-sm/6 text-white/50'>
								Tell me more about you and what you hope to achieve through the
								BIE process.
							</Description>
							<Textarea
								id='message'
								name='message'
								placeholder='Enter your message here.'
								required
								className={clsx(
									'mt-3 block w-full resize-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
									'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
								)}
								rows={3}
							/>
						</Field>
						<Field>
							<Label className='text-sm/6 font-medium text-white'>
								Services (required)
							</Label>
							<Description className='text-sm/6 text-white/50'>
								What service are you inquiring about?
							</Description>
							<div className='relative'>
								<Select
									id='services'
									name='services'
									required
									className={clsx(
										'mt-3 block w-full appearance-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
										'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
										// Make the text of each option black on Windows
										'*:text-black',
									)}>
									<option>Free Consult Call</option>
									<option>Schedule Initial Visit ($185)</option>
									<option>Schedule a Follow Up Visit ($85)</option>
									<option>Interested in Packages</option>
								</Select>
								<ChevronDownIcon
									className='group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60'
									aria-hidden='true'
								/>
							</div>
						</Field>
						<Button
							type='submit'
							className='rounded bg-color1 py-2 px-4 text-sm text-white hover:bg-color3 ease-in-out duration-200'>
							Let&apos;s get well!
						</Button>
					</Fieldset>
				</form>
			</section>
			<section className='bg-color4/10 py-10 space-y-5 px-5'>
				<h3 className='text-color1 text-3xl lg:text-4xl text-center'>
					Clinic Location
				</h3>
				<div className='flex flex-col md:flex-row max-w-screen-2xl mx-auto'>
					<Link
						href='https://maps.app.goo.gl/otoE1X1iBrQAHv9G8'
						target='_blank'
						className='md:w-1/2'>
						<CldImage
							width='500'
							height='500'
							src='https://res.cloudinary.com/dx97fht5v/image/upload/v1730080688/vaw-google-map-ss_icj74m.png'
							sizes='100vw'
							alt='google map view of the clinic'
							className='object-scale-down mx-auto md:ml-auto md:mr-5 border border-color1'
						/>
					</Link>
					<div className='md:w-1/2 flex flex-col mx-auto md:ml-5 space-y-3 px-5 md:px-0 justify-center'>
						<h4 className='text-color1 text-xl pt-5 md:pt-0'>Address:</h4>
						<a
							className='hover:text-color4 text-sm md:text-base'
							href='https://maps.app.goo.gl/otoE1X1iBrQAHv9G8'
							target='_blank'>
							<p>2291 W March Lane</p>
							<p>Building A, Suite A101</p>
							<p>Stockton, CA 95207</p>
						</a>
					</div>
				</div>
				<div className='flex flex-col md:flex-row max-w-screen-2xl mx-auto'>
					<Link
						href='https://maps.app.goo.gl/otoE1X1iBrQAHv9G8'
						target='_blank'
						className='md:w-1/2'>
						<CldImage
							width='500'
							height='500'
							src='https://res.cloudinary.com/dx97fht5v/image/upload/v1728434869/Valley_Allergy_Wellness_Office_Parking_yk939q.jpg'
							sizes='100vw'
							alt='parking map of the clinic'
							className='object-scale-down mx-auto md:ml-auto md:mr-5 border border-color1'
						/>
					</Link>
					<div className='md:w-1/2 flex flex-col mx-auto md:ml-5 space-y-3 px-5 md:px-0 justify-center'>
						<h4 className='text-color1 text-xl pt-3'>Directions:</h4>
						<ul className='text-sm md:text-base space-y-4 max-w-screen-sm'>
							<li>
								The directions will likely have you turn onto&nbsp;
								<strong>Quail Lakes Plaza</strong>.
							</li>
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
				<h3 className='text-color1 text-3xl lg:text-4xl text-center pt-5'>
					Business Hours
				</h3>
				<div className='max-w-screen-sm mx-auto text-center'>
					<p className='border border-color1 text-color1 py-1 text-sm rounded-full uppercase'>
						by appointment only
					</p>
					<div className='my-5'>
						<p>Monday: Closed</p>
						<p>Tuesday & Thursday: 9AM - 1PM</p>
						<p>Wednesday & Friday: 9AM - 5PM</p>
					</div>
					<p className='italic'>Weekend appointments available upon request.</p>
					<Link
						href='https://squareup.com/appointments/book/k5xabxhqoc83g2/L5QGYQW5FHNP6/start'
						target='_blank'
						className=''>
						<button className='mt-5 px-4 py-2 border border-3 border-color1 bg-color1 text-white text-sm text-center hover:bg-transparent hover:border-color1 hover:text-color1 ease-in-out duration-200'>
							BOOK YOUR APPOINTMENT TODAY
						</button>
					</Link>
				</div>
			</section>
		</main>
	);
}

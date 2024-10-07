'use client';

import Link from 'next/link';
import {CldImage} from 'next-cloudinary';
import Image from 'next/image';
import {IconButton} from '@mui/material';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YelpIcon from '../assets/icons8-yelp.svg';
import ThreadsIcon from '../assets/icons8-threads.svg';
import MailSVG from '../assets/mail.svg';
import PhoneSVG from '../assets/phone.svg';
import EmailSVG from '../assets/email.svg';

export default function Footer() {
	return (
		<footer id='contact'>
			<section className='bg-color3/50 p-2 text-center text-sm text-gray-800'>
				<p>
					<span className='font-bold'>Disclaimer: </span>B.I.E. practitioners
					are not medical doctors and do not use medical diagnostic or treatment
					procedures.
				</p>
			</section>
			<section className='p-10 bg-color4/10'>
				<p className='text-color1 font-bold text-center md:text-left'>
					Follow us on Instagram!
				</p>
				<Link
					className='mt-3 flex flex-col md:flex-row md:space-x-1'
					href='https://www.instagram.com/valleyallergywellness/'
					target='_blank'>
					<CldImage
						width='300'
						height='300'
						src='https://res.cloudinary.com/dx97fht5v/image/upload/v1726009247/insta-1_xoczzf.png'
						sizes='100vw'
						alt='instagram post thumbnail'
						className='md:w-1/4 object-scale-down mx-auto'
					/>
					<CldImage
						width='300'
						height='300'
						src='https://res.cloudinary.com/dx97fht5v/image/upload/v1726009248/insta-2_ckbznb.png'
						sizes='100vw'
						alt='instagram post thumbnail'
						className='hidden md:block md:w-1/4 object-scale-down mx-auto'
					/>
					<CldImage
						width='300'
						height='300'
						src='https://res.cloudinary.com/dx97fht5v/image/upload/v1726009246/insta-3_ej42fj.png'
						sizes='100vw'
						alt='instagram post thumbnail'
						className='hidden md:block md:w-1/4 object-scale-down mx-auto'
					/>
					<CldImage
						width='300'
						height='300'
						src='https://res.cloudinary.com/dx97fht5v/image/upload/v1728269781/insta-4_fn7rls.png'
						sizes='100vw'
						alt='instagram post thumbnail'
						className='hidden md:block md:w-1/4 object-scale-down mx-auto'
					/>
				</Link>
			</section>
			<section className='bg-color1 text-white justify-center pb-5'>
				<div className='grid grid-flow-row md:grid-flow-col font-light mx-auto'>
					<div className='flex flex-col p-5 pb-0 mx-auto mb-0'>
						<Link href='#top'>
							<CldImage
								width='300'
								height='300'
								src='https://res.cloudinary.com/dx97fht5v/image/upload/v1727248558/vaw-logo-white_wdct6z.png'
								sizes='100vw'
								alt='vaw logo'
								className=''
							/>
						</Link>
						<div className='flex space-x-2 mx-auto'>
							<IconButton
								className='h-10'
								href='https://www.instagram.com/valleyallergywellness/'
								target='_blank'
								rel='noreferrer'
								sx={{color: 'white'}}>
								<InstagramIcon />
							</IconButton>
							<IconButton
								className='h-10'
								href='https://www.facebook.com/profile.php?id=100091973934108'
								target='_blank'
								rel='noreferrer'
								sx={{color: 'white'}}>
								<FacebookIcon />
							</IconButton>
							<a
								href='https://www.yelp.com/biz/valley-allergy-wellness-stockton'
								target='_blank'
								rel='noreferrer'
								className='flex align-baseline px-1'>
								<Image width={30} src={YelpIcon} alt='yelp logo' />
							</a>
							<a
								href='https://www.threads.net/@valleyallergywellness'
								target='_blank'
								rel='noreferrer'
								className='flex align-baseline px-1'>
								<Image width={30} src={ThreadsIcon} alt='threads logo' />
							</a>
						</div>
					</div>
					<div className='text-sm mt-10 mx-auto md:ml-0'>
						<h3 className='font2 text-lg text-white'>
							Valley Allergy + Wellness
						</h3>
						<div className='flex items-start mt-3'>
							<Image src={MailSVG} alt='mail logo' />
							<a
								className='pl-3 hover:text-color4'
								href='https://maps.app.goo.gl/otoE1X1iBrQAHv9G8'
								target='_blank'>
								<p>2291 W March Lane</p>
								<p>Building A, Suite A101</p>
								<p>Stockton, CA 95207</p>
							</a>
						</div>
						<div className='flex items-center h-7'>
							<Image src={PhoneSVG} alt='phone logo' />
							<a
								className='pl-3 text-white hover:text-color4'
								href='tel:+12097518676'>
								+1 &#40;209&#41; 751-8676
							</a>
						</div>
						<div className='flex items-center h-7'>
							<Image src={EmailSVG} alt='email logo' />
							<a
								className='pl-3 text-white hover:text-color4 text-xs'
								href='mailto:ValleyAllergyAndWellness@outlook.com'>
								ValleyAllergyAndWellness@outlook.com
							</a>
						</div>
					</div>
					<div className='flex flex-col text-sm mt-10 mx-auto md:ml-0'>
						<h3 className='font2 text-lg text-white'>Business Hours</h3>
						<p className='text-xs uppercase bg-white text-color1 w-36 text-center rounded-xl font-bold px-1'>
							appointment only
						</p>
						<div className='my-2'>
							<p>Tuesday & Thursday, 9AM-1PM</p>
							<p>Wednesday & Friday, 9AM-4PM</p>
						</div>
						<p className='text-xs italic'>
							Weekend appointments available upon request.
						</p>
						<Link
							href='https://book.squareup.com/appointments/k5xabxhqoc83g2/location/L5QGYQW5FHNP6/services'
							target='_blank'
							className='mt-2 px-1 rounded-2xl border border-3 border-white bg-color1 text-white text-sm text-center hover:bg-white hover:border-color1 hover:text-color1 ease-in-out duration-200'>
							BOOK YOUR APPOINTMENT TODAY
						</Link>
					</div>
				</div>
			</section>
		</footer>
	);
}

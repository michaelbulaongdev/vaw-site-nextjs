'use client';

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
		<footer className='bg-color1 text-white justify-center pb-5'>
			<div className='grid grid-flow-row md:grid-flow-col font-light mx-auto'>
				<div className='flex flex-col p-5 pb-0 mx-auto mb-0'>
					<CldImage
						width='300'
						height='300'
						src='https://res.cloudinary.com/dx97fht5v/image/upload/v1727248558/vaw-logo-white_wdct6z.png'
						sizes='100vw'
						alt='vaw logo'
						className=''
					/>
				</div>
				<div className='text-sm mt-10'>
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
					<div className='flex mt-3'>
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
					{/* <div className='flex items-center h-7'>
						<Image src={PhoneSVG} alt='mail logo' />
						<a
							className='pl-3 text-white hover:text-red-400'
							href='tel:+61416873169'>
							+61 416 873 169
						</a>
					</div>
					<div className='flex items-center h-7'>
						<Image src={EmailSVG} alt='mail logo' />
						<a
							className='pl-3 text-white hover:text-red-400'
							href='mailto:info@amyaquilini.com.au'>
							info@amyaquilini.com.au
						</a>
					</div> */}
				</div>
				<div className='flex flex-col text-sm mt-10'>
					<h3 className='font2 text-lg text-white'>Business Hours</h3>
					<p className='text-xs uppercase bg-white text-color1 w-36 text-center rounded-xl font-bold px-1'>
						appointment only
					</p>
				</div>
			</div>
		</footer>
	);
}

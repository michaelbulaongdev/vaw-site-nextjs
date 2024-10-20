import Image from 'next/image';
import Link from 'next/link';
import VAWLogo from '../assets/vaw-logo.png';
import {linkStyle} from '../styles';
import {linkStyleMenu} from '../styles';
import {
	Menu,
	MenuButton,
	MenuItem,
	MenuItems,
	Transition,
} from '@headlessui/react';
import {Fragment} from 'react';

export default function NavBar() {
	return (
		<main className='shadow-xl'>
			<header
				id='top'
				className='flex flex-row justify-between py-1 px-5 bg-transparent max-w-screen-2xl mx-auto'>
				<Link href='/'>
					<Image
						src={VAWLogo}
						width={180}
						height={180}
						alt='MYB Logo'
						className='hidden lg:block p-1'
					/>
					<Image
						src={VAWLogo}
						width={150}
						height={150}
						alt='MYB Logo'
						className='lg:hidden'
					/>
				</Link>
				<div className='flex flex-row space-x-5 my-auto items-center'>
					<Link href='/' className={linkStyle}>
						HOME
					</Link>
					<Link href='/services#rates' className={linkStyle}>
						SERVICES
					</Link>
					<Link href='/forms' className={linkStyle}>
						FORMS
					</Link>
					<Link href='/about' className={linkStyle}>
						ABOUT
					</Link>
					<Link href='/theory-behind-bie' className={linkStyle}>
						BIE
					</Link>
					<Link href='/contact' className={linkStyle}>
						CONTACT
					</Link>
					<Link href='/faq' className={linkStyle}>
						FAQ
					</Link>
					<div className='hidden lg:block'>
						<Link
							href='https://squareup.com/appointments/book/k5xabxhqoc83g2/L5QGYQW5FHNP6/start'
							target='_blank'>
							<button className='py-2 px-5 rounded-lg border border-3 border-white bg-color1 text-white hover:bg-white hover:border-color1 hover:text-color1 ease-in-out duration-200'>
								BOOK NOW
							</button>
						</Link>
					</div>

					{/* menu for mobile and tablet widths */}
					<Menu
						as='div'
						className='lg:hidden relative inline-block text-right mr-3'>
						<MenuButton className='flex justify-center hover:text-color2 ease-in-out duration-200'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-8 h-8'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
								/>
							</svg>
						</MenuButton>
						<Transition
							as={Fragment}
							enter='transition ease-out duration-100'
							enterFrom='transform opacity-0 scale-95'
							enterTo='transform opacity-100 scale-100'
							leave='transition ease-in duration-75'
							leaveFrom='transform opacity-100 scale-100'
							leaveTo='transform opacity-0 scale-95'>
							<MenuItems className='absolute my-3 mx-auto p-3 flex flex-col space-y-3 right-0 mt-2 w-48 origin-top-right bg-white shadow-xl ring-2 ring-black/5 focus:outline-none z-10'>
								<MenuItem>
									<Link href='/' className={linkStyleMenu}>
										HOME
									</Link>
								</MenuItem>
								<MenuItem>
									<Link href='/services#rates' className={linkStyleMenu}>
										SERVICES
									</Link>
								</MenuItem>
								<MenuItem>
									<Link href='/forms' className={linkStyleMenu}>
										FORMS
									</Link>
								</MenuItem>
								<MenuItem>
									<Link href='/about' className={linkStyleMenu}>
										ABOUT
									</Link>
								</MenuItem>
								<MenuItem>
									<Link href='/theory-behind-bie' className={linkStyleMenu}>
										BIE
									</Link>
								</MenuItem>
								<MenuItem>
									<Link href='/contact' className={linkStyleMenu}>
										CONTACT
									</Link>
								</MenuItem>
								<MenuItem>
									<Link href='/faq' className={linkStyleMenu}>
										FAQ
									</Link>
								</MenuItem>
								<MenuItem>
									<Link
										href='https://squareup.com/appointments/book/k5xabxhqoc83g2/L5QGYQW5FHNP6/start'
										className='p-2 ml-10 rounded-lg border border-3 border-white bg-color1 text-white text-sm hover:bg-white hover:border-color1 hover:text-color1 ease-in-out duration-200'>
										BOOK NOW
									</Link>
								</MenuItem>
							</MenuItems>
						</Transition>
					</Menu>
				</div>
			</header>
		</main>
	);
}

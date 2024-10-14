'use client';

import Link from 'next/link';
import {Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/react';
import {ChevronDownIcon} from '@heroicons/react/20/solid';

import {
	faqDisclosureButton,
	faqDisclosureChevron,
	faqDisclosurePanel,
} from '../styles';

export default function FAQ() {
	return (
		<main className='flex flex-col'>
			<section className='flex flex-col md:flex-row bg-gradient-to-b from-transparent to-color1/20 p-5'>
				<div className='flex md:w-1/2 md:pr-10 min-h-96'>
					<h1 className='font2 text-5xl text-color1 text-right'>
						Frequently Asked Questions
					</h1>
				</div>
				<div className='md:w-1/2 flex flex-col space-y-3 p-2'>
					<Disclosure>
						<DisclosureButton className='group flex flex-row space-x-2 text-xl hover:text-color3'>
							<span>What can I expect at my first BIE session?</span>
							<ChevronDownIcon className='size-5 group-data-[open]:rotate-180' />
						</DisclosureButton>
						<DisclosurePanel className='p-5 flex flex-col space-y-3'>
							<p>A typical BIE session has two steps:</p>
							<h3>
								1. Identifying the stressors that the client is intolerant to
							</h3>
							<p>
								Biofeedback analysis (muscle testing) is an assessment tool that
								is used to identify stressors that the body is unable to
								correctly recognize. Everything in this world carries a unique
								frequency. By exposing a muscle to a frequency, the muscle will
								either strengthen or weaken. The muscle will strengthen if the
								frequency of the arm is in “resonance” with the frequency of the
								stressor. On the other hand, it will weaken if the arm is in
								“dissonance” with the frequency of the stressor. If it is the
								latter, this would mean that the body is unable to properly
								identify the stressor.
							</p>
							<h3>2. Normalizing the client to the stressor(s)</h3>
							<p>
								Once the frequencies that the client has tested positive to have
								been identified, they are imprinted into the body using a
								patented device that directs the frequencies onto 16 acupuncture
								points (without the use of needles). On average, it takes 2-5
								session to become normalized to a particular stressor.
							</p>
						</DisclosurePanel>
					</Disclosure>
					<hr></hr>
					<Disclosure>
						<DisclosureButton className={faqDisclosureButton}>
							<span>Are there any side effects?</span>
							<ChevronDownIcon className={faqDisclosureChevron} />
						</DisclosureButton>
						<DisclosurePanel className={faqDisclosurePanel}>
							<p>
								When the body has been freed of an intolerance, any of the
								stored substance(s) will be released from the cells and will
								re-circulate throughout the body until they are eliminated. Some
								clients may experience a sore throat, headache, sinus
								congestion, a tired or lethargic feeling, aches, pains, or even
								nausea. These are all symptoms of the body detoxifying itself
								and regenerating new cells.{' '}
								<strong>
									Ensure that you are drinking plenty of water to reduce the
									effects of detoxification.
								</strong>
							</p>
						</DisclosurePanel>
					</Disclosure>
				</div>
			</section>
		</main>
	);
}

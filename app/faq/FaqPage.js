'use client';

import {Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/react';
import {ChevronDownIcon} from '@heroicons/react/20/solid';

import {
	faqDisclosureButton,
	faqDisclosureChevron,
	faqDisclosurePanel,
} from '../styles';

export default function FaqPage() {
	return (
		<main className='flex flex-col'>
			<section className='bg-gradient-to-b from-color3/30 to-color3/10'>
				<div className='max-w-screen-lg mx-auto flex flex-col p-5'>
					<h1 className='font2 my-10 text-5xl text-color1 text-center'>
						Frequently Asked Questions
					</h1>
					<div className='flex flex-col space-y-3 p-2 mx-auto lg:w-2/3'>
						<Disclosure>
							<DisclosureButton className='group flex flex-row space-x-2 text-xl hover:text-color3 text-left'>
								<span className='w-11/12'>
									What can I expect at my first BIE session?
								</span>
								<ChevronDownIcon className='size-5 group-data-[open]:rotate-180' />
							</DisclosureButton>
							<DisclosurePanel className='p-5 flex flex-col space-y-3'>
								<p>A typical BIE session has two steps:</p>
								<h3>
									1. Identifying the stressors that the client is intolerant to
								</h3>
								<p>
									Biofeedback analysis (muscle testing) is an assessment tool
									that is used to identify stressors that the body is unable to
									correctly recognize. Everything in this world carries a unique
									frequency. By exposing a muscle to a frequency, the muscle
									will either strengthen or weaken. The muscle will strengthen
									if the frequency of the arm is in “resonance” with the
									frequency of the stressor. On the other hand, it will weaken
									if the arm is in “dissonance” with the frequency of the
									stressor. If it is the latter, this would mean that the body
									is unable to properly identify the stressor.
								</p>
								<h3>2. Normalizing the client to the stressor(s)</h3>
								<p>
									Once the frequencies that the client has tested positive to
									have been identified, they are imprinted into the body using a
									patented device that directs the frequencies onto 16
									acupuncture points (without the use of needles). On average,
									it takes 2-5 session to become normalized to a particular
									stressor.
								</p>
							</DisclosurePanel>
						</Disclosure>
						<hr></hr>
						<Disclosure>
							<DisclosureButton className={faqDisclosureButton}>
								<span className='w-11/12'>Are there any side effects?</span>
								<ChevronDownIcon className={faqDisclosureChevron} />
							</DisclosureButton>
							<DisclosurePanel className={faqDisclosurePanel}>
								<p>
									When the body has been freed of an intolerance, any of the
									stored substance(s) will be released from the cells and will
									re-circulate throughout the body until they are eliminated.
									Some clients may experience a sore throat, headache, sinus
									congestion, a tired or lethargic feeling, aches, pains, or
									even nausea. These are all symptoms of the body detoxifying
									itself and regenerating new cells.{' '}
									<strong>
										Ensure that you are drinking plenty of water to reduce the
										effects of detoxification.
									</strong>
								</p>
							</DisclosurePanel>
						</Disclosure>
						<hr></hr>
						<Disclosure>
							<DisclosureButton className={faqDisclosureButton}>
								<span className='w-11/12'>
									How soon will I notice an improvement in my symptoms?
								</span>
								<ChevronDownIcon className={faqDisclosureChevron} />
							</DisclosureButton>
							<DisclosurePanel className={faqDisclosurePanel}>
								<p>
									Some clients may begin to feel positive effects immediately
									after the first session while others may take up to a month to
									notice an improvement. This is dependent upon the client’s
									overall health, immune system, stress levels, hydration
									levels, toxic load, and the degree of intolerance to the
									stressor(s). It is important to understand that BIE does not
									increase the body&apos;s tolerance level to a stressor, nor
									does it alter the cell’s biological functioning in any way. It
									simply reintroduces the frequency of the stressors back to the
									body in order for the body to heal itself and function
									optimally. There can be many factors behind one’s health
									issues so time and patience may be required as we navigate
									these challenges and allow the body time to heal. Majority of
									clients will require somewhere between 1-4 sessions to achieve
									homeostasis.
								</p>
							</DisclosurePanel>
						</Disclosure>
						<hr></hr>
						<Disclosure>
							<DisclosureButton className={faqDisclosureButton}>
								<span className='w-11/12'>
									What about Anaphylactic Stressors?
								</span>
								<ChevronDownIcon className={faqDisclosureChevron} />
							</DisclosureButton>
							<DisclosurePanel className={faqDisclosurePanel}>
								<p>
									All anaphylactic stressors require a minimum of 4 sessions and
									only that one substance can be normalized in each session.
									Anyone with an anaphylactic stressor MUST be given consent by
									their medical doctor or medical allergist 8 months after the
									last session before ingesting or being exposed to the stressor
									that has been normalized. Generally, it may take anywhere from
									3 months to a few years before the body has normalized itself
									so that it no longer reacts to the substance when the
									traditional scratch test is administered. During this time,
									you should in no way ingest or expose yourself to that
									substance until your doctor has given you permission.
								</p>
							</DisclosurePanel>
						</Disclosure>
						<hr></hr>
						<Disclosure>
							<DisclosureButton className={faqDisclosureButton}>
								<span className='w-11/12'>
									How is BIE different from Acupuncture?
								</span>
								<ChevronDownIcon className={faqDisclosureChevron} />
							</DisclosureButton>
							<DisclosurePanel className={faqDisclosurePanel}>
								<p>
									Acupuncture simply uses needles to unblock energy in the body
									to assist the body in healing. BIE not only unblocks
									discordant energy within the body, but also reintroduces the
									stressor’s energy back into the body so that it is recognized
									and no longer reacts to the stressing substance.
								</p>
							</DisclosurePanel>
						</Disclosure>
						<hr></hr>
						<Disclosure>
							<DisclosureButton className={faqDisclosureButton}>
								<span className='w-11/12'>
									How do I prepare for my appointment?
								</span>
								<ChevronDownIcon className={faqDisclosureChevron} />
							</DisclosureButton>
							<DisclosurePanel className={faqDisclosurePanel}>
								<p>
									You will want to ensure that you are well hydrated on the day
									of the appointment. To maximize the effectiveness of the
									session, it is recommended that adults consume a minimum of 64
									ounces of water before bed on the <strong>day of </strong>AND
									the <strongs>day after </strongs>the appointment. For
									children, it is recommended for them to consume a minimum of
									48 ounces of water.
								</p>
							</DisclosurePanel>
						</Disclosure>
					</div>
				</div>
			</section>
		</main>
	);
}

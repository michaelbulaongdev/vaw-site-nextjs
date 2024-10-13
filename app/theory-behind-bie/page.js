'use client';

import {CldImage} from 'next-cloudinary';
import Link from 'next/link';

export default function TheoryBIE() {
	return (
		<main className='flex flex-col'>
			<section className=''>
				<p>“Everything in Life is Vibration”</p>
				<p>- Albert Einstein</p>
			</section>
			<section>
				<h1>The Theory Behind</h1>
				<h2>BIE</h2>
				<h3>Bioenergetic Intolerance Elimination</h3>
				<p>
					The Law of Vibration states that everything (every atom, object, and
					living thing) in the universe is in a constant state of movement. We
					refer to these movements as “vibration” and the speed or rate at which
					something vibrates is referred to as its “frequency.” New instruments
					in modern technology have allowed researchers to detect vibrations on
					the nanoscale — even smaller than 1/1000th diameter of a single human
					hair. Science has concluded that these vibrations generate
					electromagnetic energy waves, waves that consist of vibrating electric
					and magnetic fields that transfer energy through matter and across
					space. Researchers have found that vibrations and the electromagnetic
					energy associated with it can cause changes in your cells, which can
					ultimately affect how the body functions.
				</p>
				<div>
					<p>
						Vital life force energy (bioenergy) fills every cell within the
						human body.
					</p>
				</div>
				<p>
					Every organ and major region in the body requires energy in order to
					function. Energy comes from the nutrients of the food we consume and
					from free-flowing blood. Energy controls every metabolic process,
					including biochemical changes that occur within the cells. Borrowing a
					term from the computer industry, we find a new way to understand the
					body. Our body&apos;s &quot;hardware&quot; are components such as
					muscle, bones, organs, etc. The body&apos;s life force is its
					&quot;software.&quot; Our bodies are managed by an Operating System
					(OS) much like the software of a computer managing its hardware. When
					treating individuals with various health disorders, most practitioners
					work solely with the body&apos;s hardware and overlook the importance
					of working with the body&apos;s software.
				</p>
				<p>
					Pathways, known as meridians, allow energetic signals to circulate
					continuously throughout the body. In Traditional Chinese Medicine
					(TCM), a meridian or “Jing Lou” is a channel through which “Qi” (life
					force) and the other fundamental substances flow. Meridians operate
					much like a network and can be compared to a complex system of
					waterways. First, there are the main channels. Those channels then
					slowly move into smaller and finer internal pathways. These channels
					flow from one another without disconnection. Hundreds of acupuncture
					points along the meridians interact with, connect to, and can be used
					to affect, virtually every organ, system and part of the body.
				</p>
				<p>
					Every substance in the universe vibrates with its own unique
					vibrational frequency referred to as an electromagnetic fingerprint or
					“signature.” The human body has an optimal frequency that occurs when
					each of the cells vibrate at the frequency it was designed to. Bruce
					Tainio, a famous researcher and developer of Tainio Technology, found
					that a healthy body resonates at a frequency of 62-70 MHz, and when
					the body&apos;s frequency drops to 58 MHz, the body is more
					susceptible to homeostatic imbalance. Pollutants in our air, water,
					pesticides in our food, chemicals in everyday products, and even
					traumatic, stressful, or emotional experiences can all play a role in
					creating disharmony and imbalance within the body&apos;s energy field.
					Many of us, if not all of us, also rely on the electronic conveniences
					of modern life, but few of us are aware of the possible health risks
					presented by the gadgets that make our world work. Our power lines,
					cellphones, microwaves, Wi-Fi routers, computers, and other appliances
					send out a stream of invisible energy waves. Electric and magnetic
					fields &#40;EMFs&#41; are produced anywhere electricity is used and
					can enter cells through the cell membrane and build up internally,
					thereby, altering the cell&apos;s balance.
				</p>
				<div>
					<p>
						During periods of stress, be it physical or emotional, the cell’s
						state of vulnerability to discordant frequencies increases.
					</p>
				</div>
				<p>
					Any substance that the body is exposed to when undergoing a period of
					stress will be “blocked” in order to avoid harmful exposure of it in
					the future. In other words, the body will lose the ability to properly
					identify a substance. This can include various foods, pollen, dust,
					pet fur/dander, and many other common substances in our environment.
					It can even include substances that our own bodies produce such as
					hormones, neurotransmitters, and enzymes. The frequency of the
					substance that the body is intolerant to is referred to as “stressor.”
					When the body has identified something as harmful (even when it
					isn’t), exposure to that stressor produces an unwanted response and
					symptoms appear.
				</p>
				<h3>
					BIE uses a patented modality to assist the body and re-program its
					“software” to recognize the stressor.
				</h3>

				<div>
					<CldImage
						width='600'
						height='800'
						src='https://res.cloudinary.com/dx97fht5v/image/upload/v1728434869/DSC07477_hmpzmq.jpg'
						sizes='100vw'
						alt='bie explained'
						className=''
					/>
					<p>
						A low electronic frequency is directed onto various acupressure
						points (without the use of needles) to stimulate and clear any
						blockages in its pathways. While the blockages are clearing, the
						body&apos;s cells adapt to recognize the stressor&apos;s frequency.
						When the process is complete, the body will no longer see the
						stressor or intolerance as a threat when exposed to it and therefore
						no longer produce adverse reactions.
					</p>
				</div>
				<div>
					<p>
						It is important to understand that BIE does not increase the
						body&apos;s tolerance level to a given substance, nor does it alter
						the cell’s biological functioning in any way. It simply reintroduces
						the signatures of the stressors back to the body in order for it be
						able to naturally adjust itself to function optimally. Its process
						is much like utilizing a “reset” or “reboot” function to
						troubleshoot a computer that is frozen or operating at suboptimal
						performance and allowing it to return to a fully functioning state.
					</p>
					<CldImage
						width='600'
						height='800'
						src='https://res.cloudinary.com/dx97fht5v/image/upload/v1728434869/DSC07099_gdbfyk.jpg'
						sizes='100vw'
						alt='bie explained'
						className=''
					/>
				</div>
			</section>
			<secion>
				<h3>Ready to see BIE in practice?</h3>
				<CldImage
					width='300'
					height='300'
					src='https://res.cloudinary.com/dx97fht5v/image/upload/v1728860564/arrow-removebg_npck9y.png'
					sizes='100vw'
					alt='arrow'
					className=''
				/>
				<button className='py-2 px-5 rounded-lg border border-3 border-white bg-color1 text-white text-lg hover:bg-white hover:border-color1 hover:text-color1 ease-in-out duration-200'>
					<Link href='/contact'>YES! I CAN&apos;T WAIT!</Link>
				</button>
			</secion>
		</main>
	);
}

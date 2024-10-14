'use client';

import {CldImage} from 'next-cloudinary';
import Link from 'next/link';

export default function Services() {
	return (
		<main className='flex flex-col'>
			<section className='bg-cover bg-[url(https://res.cloudinary.com/dx97fht5v/image/upload/v1726006464/pexels-jplenio-1423601_bsdnb4.jpg)] p-10'>
				<h2 className='bg-white/50 text-color2 mx-auto p-5 text-4xl text-center rounded-tl-full rounded-br-full'>
					When working with me, you can expect…
				</h2>
				<ul className='text-2xl max-w-2xl mx-auto text-left space-y-7 p-10 mt-10 bg-white/50 italic'>
					<li>
						► A safe, relaxing environment for you to share your story, health
						challenges, and goals
					</li>
					<li>
						► Together we will identify the stressors that are causing you to
						have negative reactions
					</li>
					<li>
						► I’ll use a gentle, non-invasive patented device to bring balance
						to your body and relieve you of your symptoms
					</li>
				</ul>
			</section>
			<section className='flex flex-col lg:flex-row py-10'>
				<h2 className='p-10 text-center lg:text-right text-3xl lg:w-2/5'>
					Let me take you through what an initial visit would look like with me!
				</h2>
				<video
					className='mx-auto'
					width='720'
					height='480'
					controls
					preload='none'>
					<source
						src='https://res.cloudinary.com/dx97fht5v/video/upload/v1728901083/what-to-expect_o2mwag.mp4'
						type='video/mp4'
					/>
					Your browser does not support the video tag.
				</video>
			</section>
			<section>
				<div>
					<h2>
						Can you imagine this transformation for yourself or a loved one?
					</h2>
				</div>
				<div>
					<div>
						<h3>before</h3>
						<h4>You’re at a loss battling one or more of the following:</h4>
						<ul>
							<li>Hay Fever and Seasonal Allergies</li>
							<li>Headaches or Migraines</li>
							<li>Indigestion (bloating, constipation, diarrhea)</li>
							<li>Food Intolerances/Sensitivities</li>
							<li>Skin Issues (acne, eczema, psoriasis, hives)</li>
							<li>Chronic Fatigue</li>
							<li>Hormonal Imbalances</li>
							<li>Blood Sugar Imbalances</li>
							<li>High Blood Pressure or High Cholesterol</li>
							<li>Arthritis and Joint Pain</li>
						</ul>
					</div>
					<div>
						<h3>after</h3>
						<h4>You’ll regain control over your health and have:</h4>
						<ul>
							<li>Drug-free relief</li>
							<li>Optimal digestion</li>
							<li>Freedom to enjoy all foods</li>
							<li>Clear, beautiful skin</li>
							<li>Energy and stamina</li>
							<li>Balanced hormones</li>
							<li>Blood sugar, blood pressure, and cholesterol control</li>
							<li>Decreased joint pain and inflammation</li>
						</ul>
					</div>
				</div>
			</section>
			<section>
				<h2>Payment</h2>
				<p>We accept cash, credit/debit cards, and FSA/HSA cards.</p>
			</section>
			<section>
				<p>
					Has everything you read about BIE checking all the boxes for a new
					path towards relief?
				</p>
				<div className='my-5'>
					<Link
						href='https://squareup.com/appointments/book/k5xabxhqoc83g2/L5QGYQW5FHNP6/start'
						target='_blank'
						className='py-2 px-5 rounded-lg border border-3 border-white bg-color1 text-white text-lg hover:bg-white hover:border-color1 hover:text-color1 ease-in-out duration-200'>
						Click here to setup your first visit!
					</Link>
				</div>
			</section>
		</main>
	);
}

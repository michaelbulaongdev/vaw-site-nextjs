'use server';

import {redirect} from 'next/navigation';
import {revalidateTag} from 'next/cache';

export async function sendEmail(formdata) {
	const eeClient = require('elasticemail-webapiclient').client;

	const options = {
		apiKey: process.env.ELASTIC_EMAIL_API_KEY,
		apiUri: 'https://api.elasticemail.com/',
		apiVersion: 'v2',
	};

	const EE = new eeClient(options);

	// Load account data
	EE.Account.Load().then(function () {
		console.log('account loaded');
	});

	const emailParams = {
		subject: 'vaw site contact form',
		to: 'vaw.site.2024@gmail.com',
		body: `${formdata.get('firstname')} ${formdata.get(
			'lastname',
		)} ${formdata.get('email')} ${formdata.get('phone')} ${formdata.get(
			'message',
		)} ${formdata.get('services')}`,
		fromName: 'vaw site',
		bodyType: 'Plain',
	};

	// Send email
	EE.Email.Send(emailParams)
		.then((resp) => {
			console.log(resp);
			redirect('/contact'); // Navigate to the new post page
		})
		.catch((err) => {
			console.error(err);
		});
}

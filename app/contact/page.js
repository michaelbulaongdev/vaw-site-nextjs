import ContactPage from './ContactPage';
import {sendEmail} from '../utils/email';

export const metadata = {
	title: 'Contact | Valley Allergy + Wellness',
};

export default function Contact() {
	return <ContactPage sendEmail={sendEmail} />;
}

import NavBar from './components/NavBar';
import './globals.css';

export const metadata = {
	title: 'Mafae Management Consultancy',
	description: 'Your Image Is Your Message',
};

export default function RootLayout({children}) {
	return (
		<html lang='en'>
			<body className='max-w-screen-2xl mx-auto'>
				<NavBar></NavBar>
				{children}
			</body>
		</html>
	);
}

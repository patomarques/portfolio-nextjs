import { motion } from 'framer-motion';
import ContactDetails from '../components/contact/ContactDetails';
import ContactForm from '../components/contact/ContactForm';
import PagesMetaHead from '../components/PagesMetaHead';

function contact() {
	return (
		<div>
			<PagesMetaHead title="Contact" />

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{
					ease: 'easeInOut',
					duration: 0.5,
					delay: 0.1,
				}}
				className="container mx-auto flex flex-col-reverse lg:flex-row py-5 lg:py-10 lg:mt-5"
			>
				<ContactForm />

				<ContactDetails />
			</motion.div>

			<div className="font-general-regular flex justify-center items-center text-center">
			<div className="text-lg text-ternary-dark dark:text-ternary-light">
				&copy; {new Date().getFullYear()}
				<a
					href="https://github.com/realstoman/nextjs-tailwindcss-portfolio"
					target="__blank"
					className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
				>
					Next.js & Tailwind CSS Portfolio
				</a>
				.{' '}
				<a
					href="https://stoman.me"
					target="__blank"
					className="text-secondary-dark dark:text-secondary-light font-medium uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
				>
					Stoman
				</a>
			</div>
		</div>
		</div>
	);
}

export default contact;

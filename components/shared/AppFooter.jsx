import {
	FiGithub,
	FiLinkedin,
	FiGlobe,
	FiYoutube,
	FiInstagram,
} from 'react-icons/fi';
import AppFooterCopyright from './AppFooterCopyright';

const socialLinks = [
	{
		id: 1,
		icon: <FiGlobe />,
		url: '/',
	},
	{
		id: 2,
		icon: <FiGithub />,
		url: 'https://github.com/patomarques',
	},
	{
		id: 3,
		icon: <FiInstagram />,
		url: 'https://instagram.com/patoherbivore',
	},
	// {
	// 	id: 4,
	// 	icon: <FiLinkedin />,
	// 	url: 'https://www.linkedin.com/in/realstoman',
	// },
	// {
	// 	id: 5,
	// 	icon: <FiYoutube />,
	// 	url: 'https://www.youtube.com/c/realstoman',
	// },
];

function AppFooter() {
	return (
		<div className="container mx-auto">
			<div className="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
				{/* Footer social links */}
				<div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28 mb-5">
					<ul className="flex gap-4 sm:gap-8 mt-5 pt-5">
						{socialLinks.map((link) => (
							<a
								href={link.url}
								target="__blank"
								key={link.id}
								className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-5 duration-300"
							>
								<i className="text-xl sm:text-2xl md:text-4xl">
									{link.icon}
								</i>
							</a>
						))}
					</ul>
				</div>

				<AppFooterCopyright />
			</div>
		</div>
	);
}

export default AppFooter;

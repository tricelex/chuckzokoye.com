import { SocialIcons } from 'Molecules/SocialIcons';

const Footer = () => {
	return (
		<footer className="flex justify-between px-4 py-8 mt-8 md:mt-20 md:px-20">
			<span>&copy; {new Date().getFullYear()} Chuckz Okoye</span>
			<SocialIcons
				profiles={[
					{
						name: 'Github',
						url: 'https://www.github.com/tricelex',
						icon: 'GITHUB',
					},
					{
						name: 'LinkedIn',
						url: 'https://www.linkedin.com/in/chuckzokoye',
						icon: 'LINKEDIN',
					},
					{
						name: 'Twitter',
						url: 'https://twitter.com/chuckzokoye',
						icon: 'TWITTER',
					},
					{
						name: 'Instagram',
						url: 'https://www.instagram.com/chuckzokoye',
						icon: 'INSTAGRAM',
					},
				]}
			/>
		</footer>
	);
};

export { Footer };

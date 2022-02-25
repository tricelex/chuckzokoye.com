import { Container } from 'Atoms/Container';
import { Layout } from 'Templates/Layout';
import Typed from 'react-typed';

const IndexPage = () => {
	const talkAbout = [
		'Python',
		'React',
		'Django',
		'JavaScript',
		'Solidity',
		'TypeScript',
		'Blockchain',
		'GraphQL',
		'DeFi',
		'RESTful APIs',
	];

	return (
		<Layout
			title="FullStack Software Engineer – Chuckz Okoye"
			description="A Back-End Software Engineer with a focus on Python and JavaScript. I have more than 5 years experience working in software engineering."
			keywords={[
				'Software Engineer',
				'Chuckz Okoye',
				'Blockchain',
				'Back-End',
				'Full-Stack',
				'React',
				'TypeScript',
				'JavaScript',
				'GraphQL',
				'Python',
				'Django',
				'Solidity',
			]}
		>
			<Container>
				<h1 className="headline mt-20 text-3xl md:text-5xl lg:text-6xl">
					Hey, I&apos;m Chuckz Okoye!
				</h1>
				<p className="my-8 text-lg">
					I am a Professional FullStack Software Engineer, specialized in web
					applications development using Python and JavaScript frameworks. An
					advocate for building decentralized applications using web3
					technologies, I create and contribute to amazing web applications
					making the internet a better place. You can talk to me about{' '}
					<Typed
						loop
						typeSpeed={80}
						backSpeed={20}
						strings={talkAbout}
						smartBackspace
						backDelay={1000}
						loopCount={0}
						showCursor
						cursorChar="|"
					/>
					.
				</p>
			</Container>
		</Layout>
	);
};

export default IndexPage;

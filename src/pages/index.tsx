import { AnimatePage } from 'Atoms/AnimatePage';
import { Container } from 'Atoms/Container';
import { SeoHead } from 'Atoms/SeoHead';
import Typed from 'react-typed';

import LogoCypress from 'Public/assets/tools/cypress.svg';
import LogoFigma from 'Public/assets/tools/figma.svg';
import LogoGraphql from 'Public/assets/tools/graphql.svg';
import LogoHygraph from 'Public/assets/tools/hygraph.svg';
import LogoNext from 'Public/assets/tools/nextjs.svg';
import LogoPrismic from 'Public/assets/tools/prismic.svg';
import LogoStorybook from 'Public/assets/tools/storybook.svg';
import LogoSvelte from 'Public/assets/tools/svelte.svg';
import LogoVercel from 'Public/assets/tools/vercel.svg';

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
		<AnimatePage>
			<SeoHead
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
			/>
			<section id="home" className="h-full">
				<Container>
					<h1 className="mt-20 text-3xl headline md:text-5xl lg:text-6xl">
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
			</section>
			<section id="tools" className="my-40">
				<Container>
					<h2 className="headline text-xl md:text-2xl lg:text-3xl mt-24 text-center">
						Some of my favourite tools
					</h2>

					<div className="flex flex-wrap items-center justify-center max-w-5xl mt-8 mx-auto gap-x-16 gap-y-8">
						<LogoNext className="w-32" aria-label="Next.js" />
						<LogoSvelte className="w-12" aria-label="SvelteKit" />
						<LogoHygraph className="w-28 md:w-36" aria-label="Hygraph" />
						<LogoPrismic className="w-32 md:w-40" aria-label="Prismic" />
						<LogoStorybook className="w-32 md:w-40" aria-label="Storybook" />
						<LogoGraphql className="w-28 md:w-36" aria-label="GraphQL" />
						<LogoVercel className="w-32 md:w-36" aria-label="Vercel" />
						<LogoFigma className="w-8" aria-label="Figma" />
						<LogoCypress className="w-32 md:w-40" aria-label="Cypress" />
					</div>
				</Container>
			</section>
		</AnimatePage>
	);
};

export default IndexPage;

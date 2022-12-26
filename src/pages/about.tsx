import { IEducation, IJob, IPodcast } from '@types';

import { client } from 'apollo-client';
import { gql } from '@apollo/client';
import { mapEducation } from 'utils/mappings/mapEducation';
import { mapJobs } from 'utils/mappings/mapJobs';
import { mapPodcasts } from 'utils/mappings/mapPodcasts';
import { NextPage } from 'next';

import { AnimatePage } from 'Atoms/AnimatePage';
import { Button } from 'Atoms/Button';
import { Container } from 'Atoms/Container';
import { Education } from 'Organisms/Education';
import { Icon } from 'Atoms/Icon';
import { PodcastList } from 'Molecules/PodcastList';
import { SeoHead } from 'Atoms/SeoHead';
import { WorkExperience } from 'Organisms/WorkExperience';

interface IProps {
	podcasts: IPodcast[];
	jobs: IJob[];
	education: IEducation[];
}

const AboutPage: NextPage<IProps> = ({ podcasts, jobs, education }) => {
	return (
		<AnimatePage>
			<SeoHead
				title="About Chuckz Okoye, a FullStack Software Engineer"
				description="As a passionate full-stack software developer, I create amazing websites and web apps to make the internet a better place."
			/>
			<Container>
				<h1 className="mt-8 text-3xl headline md:text-5xl lg:text-6xl">
					Hey, I&apos;m Chuckz Okoye
				</h1>
				<h2 className="mt-2 text-xl font-bold md:text-2xl">
					FullStack Software Engineer from Nigeria
				</h2>
				<p className="mt-8">
					As a professional software developer, I create amazing scalable web
					applications app to make the internet a better place. I am an advocate
					for a decentralized internet, with major interest in the FinTech and
					DeFi space. Enthusiast with experience in production level
					technologies.
				</p>
				<p className="my-4">
					I am 27 years old and have been a professional web developer for about
					5 years now. The technologies I work with are JavaScript, Python and
					Solidity with a focus on Django, React.js, Next.js, Node and Express.
					I use code not only to do my day-to-day job, but also to contribute to
					open-source projects.
				</p>
				<p>
					When I am not writing code I love to spend time with my family and
					friends in Lagos. I hang around a couple of DAOs on Discord and
					actively contribute to the MoonShot Collective work-stream of
					GitcoinDAO and I love to read fiction and non-fiction books, watch
					sci-fi movies and play games on my playstation console.
				</p>
				<h2 className="mt-12 mb-4 text-4xl headline">Podcasts I enjoy</h2>

				<PodcastList podcasts={podcasts} />

				<h2 className="mt-12 mb-4 text-4xl headline">Experience</h2>

				<WorkExperience jobs={jobs} />

				<h2 className="mt-12 mb-4 text-4xl headline">Education</h2>
				<p className="mb-6">
					I am mostly self-taught, but here are some of the most relevant
					certifications I have achieved:
				</p>

				<Education education={education} />

				<div className="flex justify-center mt-8">
					<Button
						href="/Emmanuel_Okoye_CV.pdf"
						download={true}
						className="flex gap-2 group whitespace-nowrap"
					>
						<div className="w-6 text-blue-500 group-hover:text-off-white dark:text-purple-500">
							<Icon icon="DOWNLOAD" />
						</div>
						<div className="block headline group-hover:text-off-white">
							Download my CV
						</div>
					</Button>
				</div>
			</Container>
		</AnimatePage>
	);
};

export async function getStaticProps() {
	const { data } = await client.query({
		query: gql`
			query AboutPageQuery {
				podcasts(orderBy: position_ASC) {
					id
					name
					url
					logo {
						url
					}
				}
				jobs(orderBy: fromDate_DESC) {
					id
					jobTitle
					fromDate
					toDate
					description {
						raw
					}
					company {
						name
						url
						logo {
							url
						}
					}
					skills {
						skill
					}
				}
				educations(orderBy: date_DESC) {
					id
					course
					date
					courseContents {
						skill
					}
					institute {
						name
						url
						logo {
							url
						}
					}
				}
			}
		`,
	});

	return {
		props: {
			podcasts: mapPodcasts(data.podcasts),
			education: mapEducation(data.educations),
			jobs: mapJobs(data.jobs),
		},
	};
}

export default AboutPage;

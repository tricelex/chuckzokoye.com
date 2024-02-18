import { client } from 'apollo-client';
import { gql } from '@apollo/client';
import { mdxComponents } from 'Utils/mdxComponents';
import { NextPage } from 'next';
import { RichText } from '@graphcms/rich-text-react-renderer';
import { RichTextContent } from '@graphcms/rich-text-types';

import { AnimatePage } from 'Atoms/AnimatePage';
import { Container } from 'Atoms/Container';
import { SeoHead } from 'Atoms/SeoHead';

interface IProps {
	markdown: RichTextContent;
}

const PitchPage: NextPage<IProps> = ({ markdown }) => {
	return (
		<AnimatePage>
			<SeoHead
				title="Elevator Pitch."
				description="Chuckz Okoye Elevator Pitch."
			/>
			<Container>
				<h1 className="mt-8 text-3xl headline md:text-5xl lg:text-6xl">
					Elevator Pitch
				</h1>
				<RichText content={markdown} renderers={mdxComponents} />
			</Container>
		</AnimatePage>
	);
};

export async function getStaticProps() {
	const { data } = await client.query({
		query: gql`
			query PitchPageQuery {
				page(where: { slug: "pitch" }) {
					content {
						raw
					}
				}
			}
		`,
	});

	return {
		props: {
			markdown: data.page.content.raw,
		},
	};
}

export default PitchPage;

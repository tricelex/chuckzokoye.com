import Head from 'next/head';

export interface HeadProps {
	title: string;
	description: string;
	lang?: string;
	keywords?: string[];
	author?: string;
	image?: string;
	meta?: Array<{
		name: string;
		content: string;
	}>;
}

const SeoHead = ({
	title,
	description,
	author = 'Chuckz Okoye',
	keywords,
	image = 'https://res.cloudinary.com/tricelex/image/upload/v1644686428/chuckzokoye/chuckzokoye_megmrz.png',
	meta,
}: HeadProps) => {
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="author" content={author} />
			<meta name="og:title" content={title} />
			<meta name="og:description" content={description} />
			<meta name="og:type" content="website" />
			<meta name="og:url" content="https://chuckzokoye.com/" />
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:creator" content={author} />
			{meta &&
				meta.length > 0 &&
				meta.map(({ name, content }) => (
					<meta name={name} content={content} key={name} />
				))}
			{image && <meta name="og:image" content={image} />}
			{image && <meta name="twitter:image" content={image} />}
			{keywords && <meta name="keywords" content={keywords.join(', ')} />}
			<meta charSet="utf-8" />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: `{"@context":"http://schema.org","@type":"WebSite","name":"chuckzokoye.com","alternateName":"Chuckz Okoye","url":"https://chuckzokoye.com/","description":"Back-End Software Engineer with a focus on Python and JavaScript. I have more than 5 years experience working in software engineering.","image":"${image}"}`,
				}}
			/>
		</Head>
	);
};

export { SeoHead };

import { NodeRendererType } from '@graphcms/rich-text-react-renderer';

import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import Image from 'next/image';
import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter';

export const mdxComponents: NodeRendererType = {
	h2: ({ children }) => <h2 className="mt-8 text-3xl headline">{children}</h2>,
	h3: ({ children }) => <h3 className="mt-8 text-2xl headline">{children}</h3>,
	a: ({ children, href }) => {
		return (
			<a
				href={href}
				target="_blank"
				className="relative underlined"
				rel="noopener noreferrer"
			>
				{children}
			</a>
		);
	},
	ul: ({ children }) => <ul className="mt-4 ml-4 list-disc">{children}</ul>,
	li: ({ children }) => <li className="mt-1">{children}</li>,
	p: ({ children }) => (
		<p className="mt-4 mb-4 text-lg leading-7">{children}</p>
	),
	code: ({ children }) => (
		<SyntaxHighlighter
			language="typescript"
			style={dracula}
			className="p-4 text-sm border rounded-md shadow-lg border-grey-300 dark:border-grey-700 shadow-grey-500 dark:shadow-grey-800"
		>
			{children}
		</SyntaxHighlighter>
	),
	img: ({ altText, src }) => (
		<div className="relative w-full aspect-video drop-shadow-xl">
			<Image
				src={src!}
				alt={altText}
				layout="fill"
				objectFit="cover"
				className="mt-4 mb-4"
			/>
		</div>
	),
	bold: ({ children }) => <strong>{children}</strong>,
};

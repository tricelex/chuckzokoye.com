import Script from 'next/script';
import { useTheme } from 'next-themes';
import { FC, useEffect } from 'react';

import { Footer } from 'Organisms/Footer';
import { Header } from 'Organisms/Header';
import { SeoHead } from 'Atoms/SeoHead';

export type Props = {
	title: string;
	description: string;
	keywords?: string[];
	meta?: Array<{
		name: string;
		content: string;
	}>;
};

export const Layout: FC<Props> = ({
	children,
	title = 'Chuckz Okoye - Software Engineer',
	description,
	keywords,
	meta,
}) => {
	const { resolvedTheme } = useTheme();

	useEffect(() => {
		const favicon = document.querySelector("link[rel~='icon']") as any;
		if (favicon) favicon.href = `/assets/favicon_${resolvedTheme}.svg`;
	}, [resolvedTheme]);

	return (
		<div className="flex flex-col justify-between min-h-screen">
			<SeoHead
				title={title}
				description={description}
				meta={meta}
				keywords={keywords}
			/>
			<Script id="google-analytics" strategy="afterInteractive">
				{`
				(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
				new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
				j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
				'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
				})(window,document,'script','dataLayer','GTM-PZK5C8H');
				`}
			</Script>
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

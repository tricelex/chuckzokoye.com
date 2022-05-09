module.exports = {
	poweredByHeader: false,
	swcMinify: true,
	assetPrefix: process.env.ASSET_HOST || '',
	productionBrowserSourceMaps: process.env.NODE_ENV === 'production',
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});

		return config;
	},
	publicRuntimeConfig: {
		MAILCHIMP_API_KEY: process.env.MAILCHIMP_API_KEY || '',
		MAILCHIMP_API_SERVER: process.env.MAILCHIMP_API_SERVER || '',
		MAILCHIMP_AUDIENCE_ID: process.env.MAILCHIMP_AUDIENCE_ID || '',
	},
	images: {
		domains: ['media.graphassets.com'],
	},
};

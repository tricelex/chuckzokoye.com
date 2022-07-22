import { onError } from '@apollo/client/link/error';
import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client';

const httpLink = new HttpLink({
	uri: 'https://api-eu-west-2.graphcms.com/v2/cky8ytd9e3bww01z40ev1356q/master',
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
	if (graphQLErrors)
		graphQLErrors.forEach(({ message, locations, path }) =>
			console.log(
				`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
			)
		);

	if (networkError) console.log(`[Network error]: ${networkError}`);
});

export const client = new ApolloClient({
	link: from([errorLink, httpLink]),
	cache: new InMemoryCache(),
});

// added this from new update
// import { ApolloClient, InMemoryCache } from '@apollo/client';

// export const Newclient = new ApolloClient({
// 	uri: `https://api-eu-west-2.graphcms.com/v2/${process.env.GRAPHCMS_PROJECT_ID}/${process.env.GRAPHCMS_ENV}`,
// 	cache: new InMemoryCache(),
// });
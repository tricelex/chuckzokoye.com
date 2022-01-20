import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
	uri: 'https://api-eu-west-2.graphcms.com/v2/cky8ytd9e3bww01z40ev1356q/master',
	cache: new InMemoryCache(),
});

// import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';

// const httpLink = createHttpLink({
// 	uri: 'https://b3brainsync-889e34d0cc3f.herokuapp.com/graphql',
// });

// const authLink = setContext((_, { headers }) => {
// 	const token = localStorage.getItem('id_token');
// 	console.log({ token })
// 	return {
// 		headers: {
// 			...headers,
// 			authorization: token ? `Bearer ${token}` : '',
// 		},
// 	};
// });

// const client = new ApolloClient({
// 	link: authLink.concat(httpLink),
// 	cache: new InMemoryCache(),
// });

// export default client;

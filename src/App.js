import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Launches from './componants/Launches';
import './styles/main.css';
const client = new ApolloClient({
	uri: 'https://api.spacex.land/graphql',
	cache: new InMemoryCache(),
});

function App() {
	return (
		<ApolloProvider client={client}>
			<div className='App'>
				<h1 style={{ textAlign: 'center', margin: 20 }}>SpaceX launches</h1>
				<Launches />
			</div>
		</ApolloProvider>
	);
}

export default App;

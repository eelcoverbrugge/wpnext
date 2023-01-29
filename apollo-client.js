import {ApolloClient, InMemoryCache} from '@apollo/client'

const client = new ApolloClient({
    uri: 'http://localhost:8080/graphql',
    cache: new InMemoryCache(),
    headers: {
        Origin: 'http://localhost:3000/'
    }
});

export default client

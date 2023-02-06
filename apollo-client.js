import {
    ApolloClient,
    InMemoryCache,
} from "@apollo/client";

const client = new ApolloClient({
    uri: "http://localhost:8080/graphql",
    // uri: "http://localhost:3050/api/graphql",
    cache: new InMemoryCache(),
});

export default client

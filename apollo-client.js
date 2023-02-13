import {
    ApolloClient,
    InMemoryCache,
} from "@apollo/client";

const client = new ApolloClient({
    uri: "http://wp.site.local/graphql",
    cache: new InMemoryCache(),
});

export default client

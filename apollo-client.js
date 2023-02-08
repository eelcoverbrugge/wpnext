import {
    ApolloClient,
    InMemoryCache,
} from "@apollo/client";

const client = new ApolloClient({
    uri: "http://api-wpnext.local",
    cache: new InMemoryCache(),
});

export default client

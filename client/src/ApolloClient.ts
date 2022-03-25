import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: "https://localhost:44345/graphql/",
  cache: new InMemoryCache(),
});

export default apolloClient;
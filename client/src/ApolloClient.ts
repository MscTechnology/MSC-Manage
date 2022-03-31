import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: "http://localhost:5001/graphql/",
  cache: new InMemoryCache(
    {
      addTypename:false,
    }
  ),

});

export default apolloClient;
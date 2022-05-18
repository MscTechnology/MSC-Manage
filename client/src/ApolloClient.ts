import { ApolloClient, InMemoryCache } from "@apollo/client";

// const apolloClient = new ApolloClient({
//   uri: "http://10.110.247.38:81/graphql",
//   cache: new InMemoryCache(
//     {
//       addTypename:false,
//     }
//   ),

// });


const apolloClient = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(
    {
      addTypename:false,
    }
  ),

});

export default apolloClient;
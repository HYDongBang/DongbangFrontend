import ApolloClient from "apollo-boost";
import { defaults, resolvers } from "./LocalState";

export default new ApolloClient({
  uri: "http://localhost:4000",
  clientState: {
    defaults,
    resolvers,
  },
  /*headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },*/
  request: async (operation) => {
    const token = await localStorage.getItem("token");
    operation.setContext({
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
});
// "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNrZTVhcXcwaGJicGQwYTM1MWtoYjMzMngiLCJpYXQiOjE1OTgwNzg4Mzd9.pPTMDquL9Jgja6uuTkz2S8AMlCPxRd6jHkPB5TxY5uI"

// import { ApolloClient } from "apollo-client";
// import { InMemoryCache } from "apollo-cache-inmemory";
// import { HttpLink } from "apollo-link-http";
// import { onError } from "apollo-link-error";
// import { ApolloLink, split } from "apollo-link";
// import { WebSocketLink } from "apollo-link-ws";
// import { getMainDefinition } from "apollo-utilities";
// import { defaults, resolvers } from "./LocalState";

// const httpLink = new HttpLink({
//   uri: "http://localhost:4000",
// });

// const wsLink = new WebSocketLink({
//   uri: `ws://localhost:4000/`,
//   options: {
//     reconnect: true,
//   },
// });

// const client = new ApolloClient({
//   link: ApolloLink.from([
//     split(
//       // split based on operation type
//       ({ query }) => {
//         const definition = getMainDefinition(query);
//         return (
//           definition.kind === "OperationDefinition" &&
//           definition.operation === "subscription"
//         );
//       },
//       wsLink,
//       httpLink
//     ),
//   ]),

//   clientState: {
//     defaults,
//     resolvers,
//   },

//   request: async (operation) => {
//     const token = await localStorage.getItem("token");
//     operation.setContext({
//       headers: {
//         Authorization: token ? `Bearer ${token}` : "",
//       },
//     });
//   },

//   cache: new InMemoryCache(),
// });

// export default client;

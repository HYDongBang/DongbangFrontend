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
  request: async (operation)=>{
    const token = await localStorage.getItem("token");
    operation.setContext({
        headers:{
            Authorization: token ? `Bearer ${token}` : ''
        }
    });
  }
});
// "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNrZTVhcXcwaGJicGQwYTM1MWtoYjMzMngiLCJpYXQiOjE1OTgwNzg4Mzd9.pPTMDquL9Jgja6uuTkz2S8AMlCPxRd6jHkPB5TxY5uI"

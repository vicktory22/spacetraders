import { ApolloServer } from "apollo-server";
import { typeDefs } from "./types";
import { resolvers } from "./resolvers";
import { SpaceTradersAPI } from "./api/spacetraders-api";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: (): any => {
    return { spaceTradersAPI: new SpaceTradersAPI() };
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

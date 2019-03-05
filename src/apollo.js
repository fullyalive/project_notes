import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { withClientState } from "apollo-link-state";
import { ApolloLink } from "apollo-link";
import { typeDefs, defaults, resolvers } from "./clientState";
const cache = new InMemoryCache();

const stateLink = withClientState({
  // 기본적으로 Apollo에서 거의 모든 명령어들은 링크가 된다.
  cache,
  typeDefs,
  defaults,
  resolvers
});

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([stateLink])
});

export default client;

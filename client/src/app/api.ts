import { ApolloClient, InMemoryCache } from "@apollo/client";
import { persistCache, LocalStorageWrapper } from "apollo3-cache-persist";

const cache = new InMemoryCache();

// await before instantiating ApolloClient, else queries might run before the cache is persisted

async function persistApolloCache() {
  await persistCache({
    cache,
    storage: new LocalStorageWrapper(window.localStorage),
  });
}

persistApolloCache();

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache,
  connectToDevTools: true,
});

export default client;

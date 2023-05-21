import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { PrismaClient } from "@prisma/client";
import { schema } from "@/schema";
import { resolvers } from "./resolvers";
const prisma = new PrismaClient();

const server = new ApolloServer({
    typeDefs: schema,
    resolvers: resolvers,
    introspection: true,
});

(async () => {
    const { url } = await startStandaloneServer(server, {
        listen: { port: 6969 },
    });
    console.log(`🚀  Server ready at: ${url}`);
})();

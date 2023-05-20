import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const resolvers = {
  Query: {
    customers: () => {
      return prisma.customer.findMany();
    },
  },
  Mutation: {
    addCustomer: (_, args) => {
      return prisma.customer.create({ data: args });
    },
    patchCustomer: (_, { id, email, phone, address, name }) => {
      return prisma.customer.update({
        where: { id }, // specify the customer ID for update
        data: { name, email, phone, address }, // specify the updated values for name and email
      });
    },
  },
};

const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  type Customer {
    id: Int
    name: String!
    email: String!
    phone: String!
    address: String!
    orders: [Order!]
  }
  
  type Product {
    id: Int!
    name: String!
    description: String!
    price: Float!
    quantity: Int!
    orderItems: [OrderItem!]!
  }
  
  type Order {
    id: Int!
    customerId: Int!
    orderDate: String!
    totalAmount: Float!
    customer: Customer!
    orderItems: [OrderItem!]!
  }
  
  type OrderItem {
    id: Int!
    orderId: Int!
    productId: Int!
    quantity: Int!
    itemPrice: Float!
    order: Order!
    product: Product!
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    customers: [Customer]
  }

  type Mutation {
    addCustomer(
        name: String!
        email: String!
        phone: String!
        address: String!
    ): Customer

    patchCustomer(
        id: Int!
        email: String!
        phone: String!
        address: String!
        name: String!
    ): Customer
  }
`;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests

(async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  console.log(`🚀  Server ready at: ${url}`);
})();

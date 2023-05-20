// eslint-disable-next-line import/prefer-default-export
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const resolvers = {
  Query: {
    customers: () => {
      return prisma.customer.findMany();
    },
  },
  Mutation: {
    addCustomer: (_, args) => {
      return prisma.customer.create({ data: args });
    },
    deleteCustomer: (_, { id }) => {
      return prisma.customer.delete({
        where: { id }, // specify the customer ID for update
      });
    },
    patchCustomer: (_, { id, email, phone, address, name }) => {
      return prisma.customer.update({
        where: { id }, // specify the customer ID for update
        data: { name, email, phone, address }, // specify the updated values for name and email
      });
    },
  },
};

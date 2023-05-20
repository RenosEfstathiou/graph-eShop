import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const resolvers = {
    Query: {
        customers: () => {
            return prisma.customer.findMany();
        },
    },
};

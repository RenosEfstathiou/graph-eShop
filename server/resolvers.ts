// eslint-disable-next-line import/prefer-default-export
import { PrismaClient } from "@prisma/client";
import { UserLoginWithEmail, UserRegistration } from "./services/auth";

const prisma = new PrismaClient();

export const resolvers = {
    Query: {
        customers: () => {
            return prisma.customer.findMany();
        },
        products: () => {
            return prisma.product.findMany();
        },
        productById: async (parent: any, { id }: any) => {
            return prisma.product.findUnique({ where: { id } });
        },
        productsByIds: async (parent: any, { ids }: any) => {
            return prisma.product.findMany({ where: { id: { in: ids } } });
        },
    },
    Mutation: {
        register: async (_: any, args: any) => UserRegistration(_, args),
        loginWithEmail: async (_: any, args: any) => UserLoginWithEmail(_, args),
        addCustomer: (_: any, args: any) => {
            return prisma.customer.create({ data: args });
        },

        addProduct: (_: any, args: any) => {
            return prisma.product.create({ data: args });
        },
        deleteCustomer: (_: any, { id }: { id: number }) => {
            return prisma.customer.delete({
                where: { id }, // specify the customer ID for update
            });
        },
        patchCustomer: (
            _: any,
            {
                id,
                email,
                phone,
                address,
                name,
            }: {
                id: number;
                email: string;
                phone: string;
                address: string;
                name: string;
            },
        ) => {
            return prisma.customer.update({
                where: { id }, // specify the customer ID for update
                data: { name, email, phone, address }, // specify the updated values for name and email
            });
        },
    },
};

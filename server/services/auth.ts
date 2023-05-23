import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const prisma = new PrismaClient();

export const Registration = async (
    _: any,
    {
        name,
        email,
        password,
    }: { name: string; email: string; password: string },
) => {
    // //check if user already registered
    // const userExists = await prisma.user
    // if (userExists) {
    //     throw new Error("This email is already in use");
    // }

    // //hash the password using bcrypt
    // const hashedPassword = await bcrypt.hash(password, 12);

    // //save new user in the database
    // const newUser = await new Users({
    //     name,
    //     email,
    //     password: hashedPassword,
    // }).save();
    return `newUser`;
};

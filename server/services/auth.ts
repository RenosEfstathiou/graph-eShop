import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const prisma = new PrismaClient();

export const UserRegistration = async (
    _: any,
    {
        name,
        email,
        password,
    }: { name: string; email: string; password: string },
) => {
    //check if user already registered
    const userExists = await prisma.user.findFirst({ where: { email } });
    if (userExists) {
        throw new Error("This email is already in use");
    }

    //hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 12);

    //save new user in the database
    const newUser = prisma.user.create({
        data: { email, name, password: hashedPassword },
    });

    return newUser;
};

export const UserLoginWithEmail = async (
    _: any,
    { email, password }: { email: string; password: string },
) => {
    // check if there is user in our db
    const user = await prisma.user.findFirst({ where: { email } });
    if (!user) {
        throw new Error("Invalid email or password");
    }

    //Checking if password match
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        throw new Error("Invalid email or password");
    }

    //generating jwt token using user id
    const secret = process.env.JWT_SECRET_KEY ?? "";
    const token = jwt.sign({ id: user.id }, secret, {
        expiresIn: "3d",
    });
    return { token };
};

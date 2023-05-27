import { products } from "./products";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function main() {
    for (const product of products) {
        await client.product.create({ data: product });
    }
}

main()
    .catch((e) => {
        console.log(e);
        process.exit(1);
    })
    .finally(() => client.$disconnect());

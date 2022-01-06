import Prisma, * as PrismaAll from "@prisma/client";

const prismaClient = Prisma?.PrismaClient || PrismaAll?.PrismaClient
export default prismaClient
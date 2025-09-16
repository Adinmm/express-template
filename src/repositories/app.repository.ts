import { prisma } from "../config/prisma";

export async function create(name: string, email: string, address: string) {
  return await prisma.user.create({
    data: {
      name,
      email,
      address,
    },
  });
}

export async function getAllUsers() {
  return await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      address: true,
    },
  });
}

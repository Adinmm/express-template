import { prisma } from "../config/prisma";
import type{CreateUserInput} from '../models/app.models'

export async function create(input:CreateUserInput) {
  return await prisma.user.create({
    data: {
      ...input,
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

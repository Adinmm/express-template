import { request, response } from "express";
import { create, getAllUsers } from "../repositories/app.repository";

export const getApp = (req = request, res = response) => {
  res.status(200).json({
    message: "Hallo dunia",
  });
};

export async function createUser(name: string, email: string, address: string) {
  if (!name || !email || !address) {
    throw new Error("Name, email, and address are required");
  }
  await create(name, email, address);
}
export async function getAllUser() {
  const data = await getAllUsers();
  return data
}

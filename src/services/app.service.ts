import { request, response } from "express";
import { create, getAllUsers } from "../repositories/app.repository";
import type{ CreateUserInput } from "../models/app.models";

export const getApp = (req = request, res = response) => {
  res.status(200).json({
    message: "Hallo dunia",
  });
};

export async function createUser(input:CreateUserInput) {
  if (!input) {
    throw new Error("Name, email, and address are required");
  }
  await create(input);
}
export async function getAllUser() {
  const data = await getAllUsers();
  return data
}

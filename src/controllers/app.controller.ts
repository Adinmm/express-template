import { Request, Response } from "express";
import { createUser, getAllUser } from "../services/app.service";

export async function addUser(req: Request, res: Response) {
  const { name, email, address } = req.body;
  try {
    if (!name || !email || !address) {
      return res.status(400).json({
        status_code: res.statusCode,
        message: {
          en: "Bad Request: name, email, and address are required",
          id: "Permintaan tidak valid: name, email, dan address harus diisi",
        },
      });
    }

    await createUser(name, email, address);

    res.status(200).json({
      status_code: res.statusCode,
      message: "User added successfully",
    });
  } catch (error) {
    if (
      error instanceof Error &&
      error.message === "Name, email, and address are required"
    ) {
      res.status(400).json({
        status_code: res.statusCode,
        message: {
          en: "Bad Request: name, email, and address are required",
          id: "Permintaan tidak valid: name, email, dan address harus diisi",
        },
      });
    }
    res.status(500).json({
      status_code: res.statusCode,
      message: "Internal server error",
    });
  }
}

export async function getUser(req: Request, res: Response) {
  try {
    const users = await getAllUser();
    res.status(200).json({
      status_code: res.statusCode,
      message:'Retrieved users successfully',
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      status_code: res.statusCode,
      message: "Internal server error",
    });
  }}

import express from "express";
import { addUser, getUser } from "../controllers/app.controller";
import { appMiddleware } from "../middlewares/app.middleware";
import { createUserSchema } from "../models/app.models";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Welcome to the API");
});
router.get("/get_user", getUser);
router.post("/add_user",appMiddleware(createUserSchema), addUser);

export default router

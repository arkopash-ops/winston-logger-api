import type { Request, Response } from "express";
import userModel from "../models/user.model.js";
import logger from "../utils/logger.js";

export const createUser = async (req: Request, res: Response) => {
    try {
        const { email } = req.body;

        const existingUser = await userModel.findOne({ email });

        if (existingUser) {
            logger.error("Email already exists");
            return res.status(400).json({
                message: "Email already exists"
            });
        }

        const user = await userModel.create(req.body);

        logger.info("User created",
            { userId: user._id }
        );
        res.json(user);
    } catch (error) {
        logger.error(
            "User creation failed",
            { error }
        );
        res.status(500).json({ message: "Error creating user" });
    }
};

export const displayAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await userModel.find();

        if (users.length === 0) {
            logger.error(`There are ${users.length} users.`);
        }

        logger.info("Fetched all users",
            { count: users.length }
        );
        res.json(users);
    } catch (error) {
        logger.error(
            "Fetching users failed",
            { error }
        );
        res.status(500).json({ message: "Error fetching users" });
    }
}

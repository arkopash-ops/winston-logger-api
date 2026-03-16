import { Router } from "express";
import {
    createUser,
    displayAllUsers
} from "../controllers/user.controller.js";

const router = Router();

router.post("/", createUser);
router.get("/", displayAllUsers);

export default router;

import { Router } from "express";
import { Register, Login } from "../controllers/authentication";

const router = Router();

router.post("/register", Register);
router.post("/login", Login);

export default router;
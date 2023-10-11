import express from "express"
import { google, signin, signup } from "../controllers/Auth.controllers.js";

const router = express.Router();

router.post('/sign-up', signup );

router.post('/sign-in', signin);
router.post('/google', google);

export default router
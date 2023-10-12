import express from "express"
import { test } from "../controllers/User.controller.js";
import { updateUser } from "../controllers/User.controller.js"
import { verifyToken } from '../utils/verifyUser.js'

const router = express.Router();

router.get('/test', test);
router.post('/update/:id', verifyToken, updateUser)

export default router;
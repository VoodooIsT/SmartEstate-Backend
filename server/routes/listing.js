import express from "express";

import {
  createListing,
  deleteListing,
  getListing,
  updateListing,
} from "../controllers/Listing.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/create", verifyToken, createListing);
router.post("/updated/:id", verifyToken, updateListing);
router.delete("/delete-listing/:id", verifyToken, deleteListing);
router.get("/get/:id", getListing);
export default router;

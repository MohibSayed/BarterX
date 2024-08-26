import express from "express";
const router = express.Router()
import { createBarter, deleteBarter, getUserBarters, getAllBarters, updateBarter } from "../controllers/Barter.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

//CREATE
router.post("/", verifyUser, createBarter);

//UPDATE
router.put("/:id", verifyUser, updateBarter);

//DELETE
router.delete("/:id", verifyUser, deleteBarter);

//GET USER BARTERS
router.get("/find/:userId", verifyUser, getUserBarters);

//GET ALL
router.get("/", verifyAdmin, getAllBarters);

export default router
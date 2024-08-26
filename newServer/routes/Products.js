import express from "express";
import { createProduct, deleteProduct, getProduct, getProducts, getProductsByCity, randomDisplay, updateProduct, likeProduct } from "../controllers/Product.js";
const router = express.Router()
import { verifyUser } from "../utils/verifyToken.js";

//create
router.post("/", verifyUser, createProduct)
//update
router.put("/:id", verifyUser, updateProduct)
//delete
router.delete("/:id", verifyUser, deleteProduct)
//get
router.get("/category", randomDisplay)
router.get('/:id', getProduct);
router.get("/", getProducts)
router.get("/city/:city", getProductsByCity)

router.put("/like/:productId", verifyUser, likeProduct)

export default router
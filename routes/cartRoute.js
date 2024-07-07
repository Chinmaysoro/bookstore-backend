import express from "express";
import { addToCart, removeFromCart, getCart } from "../controllers/cartController.js";
import authMiddleware from "../middleware/auth.js";
import cors from 'cors';


const cartRouter = express.Router();
cartRouter.use(cors())
//--Add to cart--
cartRouter.post('/add', authMiddleware, addToCart);

//--Remove from cart--
cartRouter.post('/remove', authMiddleware, removeFromCart);

//--Get cart--
cartRouter.post('/get', authMiddleware, getCart);

export default cartRouter;  
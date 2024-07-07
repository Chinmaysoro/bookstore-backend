import express from "express";
import { loginUser, registerUser, userList } from '../controllers/userController.js';
import cors from 'cors';

const userRouter = express.Router();
userRouter.use(cors())
//--register New User--
userRouter.post('/register', registerUser);

//--login User--
userRouter.post('/login', loginUser);

//--fetch all user List
userRouter.get('/allusers', userList);

export default userRouter; 
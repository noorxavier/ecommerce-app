// filepath: c:\Users\User\OneDrive\Desktop\ecommerce-app\backend\routes\userRoute.js
import express from 'express';
import { loginUser, registerUser, adminLogin } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.post('/admin', adminLogin);

export default userRouter;
import {login,signup, usercredits} from '../controller/usercontroller.js'
import express from 'express'
import userauth from '../middlewares/auth.js';
const userRouter = express.Router();

userRouter.post('/register',signup);
userRouter.post('/login',login);
userRouter.post('/credits',userauth,usercredits);


export default userRouter

//http://localhost:4000/api/user/register
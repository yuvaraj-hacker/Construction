import express from 'express';
import { SaveUser } from '../controllers/User/userController.js';
import authMiddleware from '../middlewares/authmiddleware.js';
const UserRouter = express.Router()
UserRouter.post('/saveuser' ,authMiddleware(['Admin']), SaveUser)

export default UserRouter; 

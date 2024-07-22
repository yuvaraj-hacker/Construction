

import express from 'express';
import { register, verifyOTP } from '../controllers/auth/registerController.js';
import { login } from '../controllers/auth/loginController.js';
import { sendForgotPasswordOTP, updatePassword, verifyForgotPasswordOTP } from '../controllers/auth/passwordController.js';
import { BlogController, getBlogs } from '../controllers/auth/blogController.js';

const apiRouter = express.Router();

apiRouter.post('/apilogin', login);
apiRouter.post('/apiregister', register);
apiRouter.put('/apiverifyOTP', verifyOTP);
apiRouter.post('/apisendforgotpasswordOTP', sendForgotPasswordOTP);
apiRouter.post('/apiverifyforgotpasswordOTP', verifyForgotPasswordOTP);
apiRouter.post('/apiupdatepassword', updatePassword);
apiRouter.post('/apiBlog', BlogController);
apiRouter.get('/apiBlog', getBlogs);

export default apiRouter;

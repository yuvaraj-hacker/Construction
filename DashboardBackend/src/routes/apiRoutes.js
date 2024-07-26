

// import express from 'express';
// import { register, verifyOTP } from '../controllers/auth/registerController.js';
// import { login } from '../controllers/auth/loginController.js';
// import { sendForgotPasswordOTP, updatePassword, verifyForgotPasswordOTP } from '../controllers/auth/passwordController.js';
// import { BlogController, getBlogs, updateBlog } from '../controllers/auth/blogController.js';
// import router from './index.js';

// const apiRouter = express.Router();


// router.put('/api/apiBlog/:id', BlogController.updateBlog);



// apiRouter.post('/apilogin', login);
// apiRouter.post('/apiregister', register);
// apiRouter.put('/apiverifyOTP', verifyOTP);
// apiRouter.post('/apisendforgotpasswordOTP', sendForgotPasswordOTP);
// apiRouter.post('/apiverifyforgotpasswordOTP', verifyForgotPasswordOTP);
// apiRouter.post('/apiupdatepassword', updatePassword);
// apiRouter.post('/apiBlog', BlogController);
// apiRouter.get('/apiBlog', getBlogs);
// apiRouter.get('/apiBlog', updateBlog);

// export default apiRouter;


import express from 'express';
import { register, verifyOTP } from '../controllers/auth/registerController.js';
import { login } from '../controllers/auth/loginController.js';
import { sendForgotPasswordOTP, updatePassword, verifyForgotPasswordOTP } from '../controllers/auth/passwordController.js';
import { BlogController, getBlogs, updateBlog, deleteBlog } from '../controllers/auth/blogController.js';

const apiRouter = express.Router();

// Authentication routes
apiRouter.post('/apilogin', login);
apiRouter.post('/apiregister', register);
apiRouter.put('/apiverifyOTP', verifyOTP);
apiRouter.post('/apisendforgotpasswordOTP', sendForgotPasswordOTP);
apiRouter.post('/apiverifyforgotpasswordOTP', verifyForgotPasswordOTP);
apiRouter.post('/apiupdatepassword', updatePassword);

// Blog routes
apiRouter.post('/apiBlog', BlogController);  // Create a new blog
apiRouter.get('/apiBlog', getBlogs);         // Get all blogs
apiRouter.put('/apiBlog/:id', updateBlog);   // Update a blog
apiRouter.delete('/apiBlog/:id', deleteBlog); // Delete a blog

export default apiRouter;

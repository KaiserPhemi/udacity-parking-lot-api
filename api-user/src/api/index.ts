// third-party libraries
import express from 'express';

// routers
import authRouter from './auth/authRouter';
import userRouter from './user/userRouter';
const mainRouter = express.Router();

// routes
mainRouter.use('/auth', authRouter);
mainRouter.use('/users', userRouter);

export default mainRouter;

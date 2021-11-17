// third-party libraries
import express from 'express';

// routers
import userRouter from './user/userRouter';
const mainRouter = express.Router();

// routes
mainRouter.use('/users', userRouter);

export default mainRouter;

// third-party libraries
import express from 'express';

// router
const mainRouter = express.Router();

// routes
mainRouter.use('/auth');
mainRouter.use('/users');

export default mainRouter;

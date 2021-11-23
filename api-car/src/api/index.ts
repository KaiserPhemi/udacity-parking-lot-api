// third-party libraries
import express from 'express';

// routers
import carRouter from './car/carRouter';
const mainRouter = express.Router();

// routes
mainRouter.use('/cars', carRouter);

export default mainRouter;

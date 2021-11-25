// third-party libraries
import express from 'express';

// routers
import parkingRouter from './parking/parkingRouter';
const mainRouter = express.Router();

// routes
mainRouter.use('/parkings', parkingRouter);

export default mainRouter;

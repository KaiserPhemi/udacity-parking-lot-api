// third-party libraries
import express, { Router } from 'express';

// controller
import authCtrl from './authController';

// router
const authRouter: Router = express.Router();

// routes
authRouter
  .route('/login')
  .post(authCtrl.login);

export default authRouter;

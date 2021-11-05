// third-party libraries
import express, { Router } from 'express';

// controller
import userCtrl from './userController';

// router
const userRouter: Router = express.Router();

// routes
userRouter
  .route('/')
  .get(userCtrl.fetchAllUsers)
  .post(userCtrl.addUser);
userRouter
  .route('/:id')
  .get(userCtrl.fetchUser);

export default userRouter;

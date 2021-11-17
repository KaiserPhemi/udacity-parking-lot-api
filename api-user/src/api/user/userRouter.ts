// third-party libraries
import express, { Router } from 'express';

// middleware
import validateInput from '../../middlewares/validateInput';
import validationService from '../../middlewares/validationService';

// controller
import userCtrl from './userController';

// router
const userRouter: Router = express.Router();

// routes
userRouter
  .route('/')
  .post(
    validateInput(validationService.addUser),
    userCtrl.addUser)
  .get(userCtrl.fetchAllUsers);
userRouter
  .route('/:id')
  .get(userCtrl.fetchUser);
userRouter
  .route('/login')
  .post(
    validateInput(validationService.login),
    userCtrl.userLogin);

export default userRouter;

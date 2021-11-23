// third-party libraries
import express from 'express';

// controller
import carCtrl from './carController';

// router
const carRouter = express.Router();

//
carRouter
  .route('/')
  .post(carCtrl.addCar)
  .get(carCtrl.getAllCars)

export default carRouter;

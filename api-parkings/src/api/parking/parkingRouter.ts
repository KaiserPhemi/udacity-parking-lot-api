// third-party libraries
import express, { Router } from 'express';

// middleware
import validateInput from '../../middlewares/validateInput';
import validationService from '../../middlewares/validationService';

// controller
import parkingCtrl from './parkingController';

// router
const parkingRouter: Router = express.Router();

// routes
parkingRouter
  .route('/')
  .post(
    validateInput(validationService.addParking),
    parkingCtrl.registerParking)
  .get(parkingCtrl.fetchAllParkings);
parkingRouter
  .route('/:id')
  .get(parkingCtrl.fetchParking)
  .put(parkingCtrl.updateParking);

export default parkingRouter;

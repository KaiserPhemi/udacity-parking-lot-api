// third-party libraries
import express from 'express';

// router
const carRouter = express.Router();

//
carRouter
  .route('/')
  .post(() => {
    //add car
    console.log('THE CARS')
    return
  })
  .get(() => console.log('Get all cars'))

export default carRouter;

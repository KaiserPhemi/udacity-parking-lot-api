// third-party libraries
import { Request, Response } from 'express';

// helper functions
import errorResponse from '../../helper/errorResponse';

// data layer
import carService from './carDataLayer';

//
const carCtrl = {
  /**
   * Add a car
   * @param req 
   * @param res 
   * @returns 
   */
  async addCar(req: Request, res: Response): Promise<any> {
    const {
      registrationNo,
      brand,
      model,
      ownerEmail
    } = req.body;
    try {
      const userDetails = await carService.fetchUserByEmail(ownerEmail);
      if (!userDetails) {
        return res
          .status(404)
          .json({
            message: "User does not exist"
          })
      }
      // TODO Add car with details
      return res
        .status(201)
        .json({
          message: 'New car added'
        })
    } catch (error) {
      return errorResponse(error, res);
    }
  },

  /**
   * Fetches all registered cars
   * @param req 
   * @param res 
   * @returns 
   */
  async getAllCars(req: Request, res: Response): Promise<any> {
    try {
      const allCars = await carService.fetchAllCars();
      return res
        .status(200)
        .json({
          message: "All cars fetched.",
          cars: allCars
        })
    } catch (error) {
      return errorResponse(error, res)
    }
  }
};

export default carCtrl;

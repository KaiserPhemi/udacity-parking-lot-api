// third-party libraries
import { Request, Response } from 'express';

// helper functions
import errorResponse from '../../helper/errorResponse';

//
const carCtrl = {

  /**
   * Add a car
   * @param req 
   * @param res 
   * @returns 
   */
  async addCar(req: Request, res: Response): Promise<any> {
    try {
      // TODO check if owner exist
      // TODO Add car with details
      return res
        .status(201)
        .json({
          message: 'New car added'
        })
    } catch (error) {
      return errorResponse(error, res);
    }
  }
};

export default carCtrl;

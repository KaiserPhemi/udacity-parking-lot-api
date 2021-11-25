// third-party libraries
import { Request, Response } from 'express';

// service
import userDataLayer from './parkingDataLayer';

// helper function
import errorResponse from '../../helper/errorResponse';


//
const parkingCtrl = {
  /**
   * Regsiters a parking event
   * @param req
   * @param res
  * @returns
   */
  async registerParking(req: Request, res: Response): Promise<any> {
    const {
      carRegNo,
      ownerEmail,
      parkedOn
    } = req.body
    try {
      // TODO add parking
      // TODO return data
    } catch (error) {
      return errorResponse(error, res);
    }
  },

  /**
   * Fetch all parking details on the system
   * @param req
   * @param res
   * @returns
   */
  async fetchAllParkings(req: Request, res: Response): Promise<any> {
    try {
      return res
        .status(200)
        .json({
          message: "All parkings fetched"
        })
    } catch (error) {
      return errorResponse(error, res);
    }
  },

  /**
   * Fetch a single parking detail
   * @param req
   * @param res
   * @returns
   */
  async fetchParking(req: Request, res: Response): Promise<any> {
    try {

    } catch (error) {
      return errorResponse(error, res);
    }
  },

  /**
   * Update a parking detail
   * @param req 
   * @param res 
   * @returns 
   */
  async updateParking(req: Request, res: Response): Promise<any> {
    try {

    } catch (error) {
      return errorResponse(error, res);
    }
  }

};


export default parkingCtrl;

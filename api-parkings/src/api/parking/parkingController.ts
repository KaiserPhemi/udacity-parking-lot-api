// third-party libraries
import { Request, Response } from 'express';

// service
import parkingService from './parkingDataLayer';

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
    } = req.body;
    try {
      const newParking = await parkingService.registerParking(
        carRegNo,
        ownerEmail,
        parkedOn
      );
      return res
        .status(201)
        .json({
          message: "New Parkng registered",
          parking: newParking
        })
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
      const allParkings = await parkingService.fetchParkings();
      if (allParkings.length === 0) {
        return res
          .status(404)
          .json({
            message: "No parking record found."
          })
      }
      return res
        .status(200)
        .json({
          message: "All parkings fetched",
          parkings: allParkings
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
    const { id } = req.params;
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

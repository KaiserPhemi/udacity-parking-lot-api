// third-party libraries
import { Request, Response } from 'express';

// helper function
import errorResponse from '../../helper/errorResponse';

//
const authCtrl = {
  /**
   * Handles user login
   * @param req 
   * @param res 
   * @returns 
   */
  async login(req: Request, res: Response): Promise<any> {
    //TODO get email & password from req
    try {
      // TODO check if email exist. if yyes continue else retur error
      // TODO compare users hash password with saved hash
      // TODO return token and login details
    } catch (error) {
      return errorResponse(error, res);
    }
  }
}

export default authCtrl;

// third-party libraries
import { Request, Response } from 'express';

// helper function
import errorResponse from '../../helper/errorResponse';

//
const userCtrl = {
  /**
   * Register a user
   * @param req
   * @param res
   */
  async addUser(req: Request, res: Response): Promise<any> {
    // TODO fetch data from request
    try {
      // TODO check if user exist; return error if yes else continue
      // TODO add user to database
      // TODO return user details
    } catch (error) {
      errorResponse(error, res);
    }
  },

  /**
   * Fetch a user by id
   * @param req
   * @param res
   */
  async fetchUser(req: Request, res: Response): Promise<any> {
    // TODO get user Id from request
    try {
      // TODO fetch user from db
      // TODO return user details
    } catch (error) {
      errorResponse(error, res)
    }
  },

  /**
   * Fetch all users
   * @param req
   * @param res
   */
  async fetchAllUsers(req: Request, res: Response): Promise<any> {
    try {
      // TODO fetch all users from the database
    } catch (error) {
      errorResponse(error, res)
    }
  }
};


export default userCtrl;

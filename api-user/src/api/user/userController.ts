// third-party libraries
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

// service
import userDataLayer from './userDataLayer';

// helper function
import errorResponse from '../../helper/errorResponse';
import tokenHelper from '../../helper/tokenHelper';

// constant
const SALT_ROUND = 10;

//
const userCtrl = {
  /**
   * Register a user
   * @param req
   * @param res
   */
  async addUser(req: Request, res: Response): Promise<any> {
    const { email, name, phoneNumber } = req.body;
    let { password } = req.body;
    try {
      const existingUser = await userDataLayer.fetchUserByEmail(email);
      if (existingUser) {
        return res
          .status(403)
          .json({
            message: 'User already exist',
            existingUser,
          })
      }
      password = await bcrypt.hash(password, SALT_ROUND);
      const newUser = await userDataLayer.addUser(
        name,
        email,
        password,
        phoneNumber);
      return res
        .status(201)
        .json({
          message: "User registered successfully.",
          user: newUser
        })
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
      const allUsers = await userDataLayer.fetchAllUsers();
      return res
        .status(200)
        .json({
          message: "All users fetched.",
          allUsers,
        })
    } catch (error) {
      errorResponse(error, res)
    }
  },

  /**
   * Handles user login
   * @param req 
   * @param res 
   * @returns 
   */
  async userLogin(req: Request, res: Response): Promise<any> {
    const { email, password } = req.body;
    try {
      const existingUser = await userDataLayer.fetchUserByEmail(email);
      if (!existingUser) {
        return res
          .status(404)
          .json({
            message: "User does not exist"
          })
      }
      const passwordMatch = await bcrypt.compare(password, existingUser.password);
      if (!passwordMatch) {
        return res
          .status(404)
          .json({
            message: 'Email/password is invalid.'
          })
      }
      const accessToken = await tokenHelper.setAccessToken(
        email,
        existingUser.id);
      res.cookie('authorization', accessToken, {
        httpOnly: true,
        maxAge: 60 * 60 * 1000
      });
      return res
        .status(200)
        .json({
          message: 'User logged in successfully',
          user: {
            id: existingUser.id,
            name: existingUser.name,
            email: existingUser.email,
            phoneNumber: existingUser.phone_number
          }
        })
    } catch (error) {
      return errorResponse(error, res);
    }
  }
};


export default userCtrl;

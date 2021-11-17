// databse config
import db from '../../../config/db';

//
const userService = {
  /**
   * Adds a new user
   * @param name 
   * @param email 
   * @param password 
   * @param phoneNumber 
   * @returns
   */
  async addUser(
    name: string,
    email: string,
    password: string,
    phoneNumber: string
  ): Promise<any> {
    try {
      const newUser = await db('all_users')
        .insert({
          name,
          email,
          password,
          phone_number: phoneNumber
        })
        .returning('*');
      return newUser[0];
    } catch (error) {
      return error;
    }
  },

  /**
   * Fetches all users
   * @returns
   */
  async fetchAllUsers(): Promise<any> {
    try {
      const allUsers = await db('all_users')
        .select('*')
      return allUsers;
    } catch (error) {
      return error;
    }
  },

  /**
   * Fetch a user by email
   * @param email 
   * @returns 
   */
  async fetchUserByEmail(email: string): Promise<any> {
    try {
      const fetchedUser = await db('all_users')
        .select('*')
        .where({ email })
      return fetchedUser[0];
    } catch (error) {
      return error;
    }
  }
};

export default userService;

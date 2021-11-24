// database connection
import db from '../../../config/db';

//
const carService = {
  /**
   * Add a new car
   * @param registrationNo 
   * @param brand 
   * @param model 
   * @param ownerEmail 
   * @returns 
   */
  async addCar(
    registrationNo: string,
    brand: string,
    model: string,
    ownerEmail: string
  ): Promise<any> {
    try {
      const newCar = await db('cars')
        .insert({
          registration_no: registrationNo,
          brand,
          model,
          owner_email: ownerEmail
        })
        .returning('*');
      return newCar[0];
    } catch (error) {
      return error;
    }
  },

  /**
   * Fetches all cars
   * @returns 
   */
  async fetchAllCars(): Promise<any> {
    try {
      const allCars = await db('cars')
        .select('*')
      return allCars;
    } catch (error) {
      return error;
    }
  },

  /**
   * Fetch user details by email
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
}

export default carService;

import db from '../../../config/db';

const carService = {
  async addCar(): Promise<any> {
    try {
      const newCar = await db('cars')
        .insert({})
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

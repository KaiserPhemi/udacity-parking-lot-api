// databse config
import db from '../../../config/db';

//
const parkingService = {
  /**
   * Fetches all car parkings
   * @returns
   */
  async fetchParkings(): Promise<any> {
    try {
      const allParkings = await db("parkings")
        .select('*');
      return allParkings;
    } catch (error) {
      return error;
    }
  }
};

export default parkingService;

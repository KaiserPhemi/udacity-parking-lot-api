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
  },

  /**
   * Register a new parking
   * @param carRegNo 
   * @param ownerEmail 
   * @param parkedOn 
   * @returns 
   */
  async registerParking(
    carRegNo: string,
    ownerEmail: string,
    parkedOn: string
  ): Promise<any> {
    try {
      const newParking = await db('parkings')
        .insert({
          car_reg_no: carRegNo,
          owner_email: ownerEmail,
          parked_on: parkedOn
        })
        .returning('*');
      return newParking[0];
    } catch (error) {
      return error
    }
  }
};

export default parkingService;

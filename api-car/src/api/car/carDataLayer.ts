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
  }
}

export default carService;

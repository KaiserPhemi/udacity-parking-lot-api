// third-party libraries
import jwt from 'jsonwebtoken';

// 
const tokenHelper = {
  /**
   * Generates access token for login
   * @param email 
   * @param userId 
  * @returns
   */
  async setAccessToken(email: string, userId: number): Promise<any> {
    try {
      return jwt.sign(
        { email, userId },
        process.env.JWT_SECRET,
        { expiresIn: '1h' })
    } catch (error) {
      return error;
    }
  }
}

export default tokenHelper;

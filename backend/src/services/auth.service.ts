import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { authConfig } from '../config/auth.config.js';

export class AuthService {
  static async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, authConfig.bcryptRounds);
  }

  static async comparePasswords(plainPassword: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(plainPassword, hashedPassword);
  }

  static generateToken(payload: any): string {
    return jwt.sign(payload, authConfig.jwtSecret, {
      expiresIn: authConfig.jwtExpiresIn
    });
  }

  static verifyToken(token: string): any {
    try {
      return jwt.verify(token, authConfig.jwtSecret);
    } catch (error) {
      throw new Error('Token inválido');
    }
  }

  static extractTokenFromHeader(authHeader: string | undefined): string | null {
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return null;
    }
    return authHeader.substring(7);
  }
}
import type { Request, Response, NextFunction } from 'express';
import { AuthService } from '../services/auth.service.js';

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const token = AuthService.extractTokenFromHeader(req.headers.authorization);

  if (!token) {
    return res.status(401).json({ error: 'Token de acesso necessário' });
  }

  try {
    const decoded = AuthService.verifyToken(token);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ error: 'Token inválido ou expirado' });
  }
};
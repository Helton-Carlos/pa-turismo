import type { Request, Response, NextFunction } from 'express';
import { z } from 'zod';

export const validate = (schema: z.ZodTypeAny) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const validated = schema.parse(req.body);

      req.body = validated;

      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          error: 'Dados inválidos',
          details: error.issues.map((err) => ({
            field: err.path.join('.'),
            message: err.message,
          })),
        });
      }

      return res.status(500).json({
        error: 'Erro interno de validação',
      });
    }
  };
};

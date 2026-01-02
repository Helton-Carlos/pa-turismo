import { db } from '../db/connect.js';

import type { Request, Response } from 'express';
import type { User } from '../types/user.js';

export async function createUser(req: Request<User>, res: Response) {
  const { name, email, password } = req.body;

  console.log(name, email, password);

  try {
    const stmt = db.prepare(
      'INSERT INTO user (name, email, password) VALUES (?,?,?)',
    );

    const result = stmt.run(name, email, password);

    res.status(201).json({
      mensagem: 'Usuário criado com sucesso!',
      id: result.lastInsertRowid,
    });
  } catch (error: any) {
    console.error('Erro ao criar usuário:', error);

    if (error.message.includes('UNIQUE')) {
      res.status(409).json({ erro: 'Email já cadastrado' });
      return;
    }

    res.status(500).json({ erro: 'Erro no servidor' });
  }
}

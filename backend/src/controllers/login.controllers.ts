import { db } from '../db/connect.js';
import { AuthService } from '../services/auth.service.js';

import type { Request, Response } from 'express';
import type { User } from '../types/user.js';

export async function createUser(req: Request, res: Response) {
  try {
    const { name, email, password } = req.body;
    const existingUser = db
      .prepare('SELECT id FROM user WHERE email = ?')
      .get(email);
    if (existingUser) {
      return res.status(409).json({ error: 'Email já cadastrado' });
    }

    const hashedPassword = await AuthService.hashPassword(password);

    const stmt = db.prepare(
      'INSERT INTO user (name, email, password) VALUES (?,?,?)',
    );

    const result = stmt.run(name, email, hashedPassword);

    const token = AuthService.generateToken({
      id: result.lastInsertRowid,
      email,
      name,
    });

    res.status(201).json({
      message: 'Usuário criado com sucesso!',
      id: result.lastInsertRowid,
      token,
    });
  } catch (error: any) {
    console.error('Erro ao criar usuário:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
}

export async function loginUser(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    const user = db.prepare('SELECT * FROM user WHERE email = ?').get(email) as
      | User
      | undefined;

    if (!user) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }

    const isPasswordValid = await AuthService.comparePasswords(
      password,
      user.password!,
    );

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }

    const token = AuthService.generateToken({
      id: user.id,
      email: user.email,
      name: user.name,
    });

    res.json({
      message: 'Login realizado com sucesso!',
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error: any) {
    console.error('Erro no login:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
}

export async function getProfile(req: Request, res: Response) {
  try {
    const userId = req.user?.id;

    const user = db
      .prepare('SELECT id, name, email FROM user WHERE id = ?')
      .get(userId) as User | undefined;

    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    res.json({ user });
  } catch (error: any) {
    console.error('Erro ao buscar perfil:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
}

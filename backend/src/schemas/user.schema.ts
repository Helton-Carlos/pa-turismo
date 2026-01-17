import { z } from 'zod';

export const userCreateSchema = z.object({
  name: z.string()
    .min(2, 'Nome deve ter pelo menos 2 caracteres')
    .max(100, 'Nome deve ter no máximo 100 caracteres'),
  
  email: z.string()
    .email('Email inválido')
    .max(150, 'Email deve ter no máximo 150 caracteres'),
    
  password: z.string()
    .min(6, 'Senha deve ter pelo menos 6 caracteres')
    .max(100, 'Senha deve ter no máximo 100 caracteres')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      'Senha deve conter pelo menos uma letra maiúscula, uma minúscula, um número e um caractere especial'
    )
});

export const userLoginSchema = z.object({
  email: z.string()
    .email('Email inválido'),
    
  password: z.string()
    .min(1, 'Senha é obrigatória')
});

export type UserCreateInput = z.infer<typeof userCreateSchema>;
export type UserLoginInput = z.infer<typeof userLoginSchema>;
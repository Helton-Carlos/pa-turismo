export const authConfig = {
  jwtSecret: process.env.JWT_SECRET || 'xxxx_xxxxx_xxxx_xxxx',
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '7d',
  bcryptRounds: parseInt(process.env.BCRYPT_ROUNDS || '12'),
};

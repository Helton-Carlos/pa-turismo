import { Router } from 'express';
import {
  createUser,
  loginUser,
  getProfile,
} from '../controllers/login.controllers.js';
import { validate } from '../middlewares/validation.middleware.js';
import { authenticateToken } from '../middlewares/auth.middleware.js';
import { userCreateSchema, userLoginSchema } from '../schemas/user.schema.js';

const router = Router();

router.get('/profile', authenticateToken, getProfile);
router.post('/create-user', validate(userCreateSchema), createUser);
router.post('/login', validate(userLoginSchema), loginUser);

export default router;

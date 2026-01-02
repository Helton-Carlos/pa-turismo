import { Router } from 'express';
import { createUser } from '../controllers/login.controllers.js';

const router = Router();

router.post('/create-user', createUser);

export default router;

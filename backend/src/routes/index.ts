import { Router } from 'express';
import routerLogin from './login.js';

const router = Router();

router.use('/login', routerLogin);

export default router;

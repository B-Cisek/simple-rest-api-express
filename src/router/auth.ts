import { Router } from 'express';
import { register, login } from '../controllers/auth';

export default (router: Router) => {
  router.post('/register', register);
  router.post('/login', login);
};

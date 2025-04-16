import express from 'express';
import { createUser, getUserAccount, loginUser, updateUser } from '../controllers/user.controller.js';

const router = express.Router();

router.post('/', createUser);
router.get('/account/:email', getUserAccount);
router.put('/:id', updateUser);
router.post('/login', loginUser);

export default router;
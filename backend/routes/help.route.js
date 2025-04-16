import express from 'express';
import { createHelp } from '../controllers/help.controller.js';

const router = express.Router();

router.post('/', createHelp);


export default router;
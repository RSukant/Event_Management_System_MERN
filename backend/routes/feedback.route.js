import express from 'express';
import { createFeedBack } from '../controllers/feedback.controller.js';

const router = express.Router();

router.post('/', createFeedBack);


export default router;
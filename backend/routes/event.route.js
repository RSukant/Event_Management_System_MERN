import express from 'express';
import { getEventsByCategory, createEvent, updateEvent, deleteEvent, getEventsByUsername, getEventsByCity } from '../controllers/event.controller.js';

const router = express.Router();

router.get('/type/:category', getEventsByCategory);
router.get('/:username', getEventsByUsername);
router.get('/location/:city', getEventsByCity);
router.post('/', createEvent);
router.put('/:id', updateEvent);
router.delete('/:id', deleteEvent);

export default router;
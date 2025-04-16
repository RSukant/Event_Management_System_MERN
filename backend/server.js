import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import cors from 'cors';

import userRoutes from './routes/user.route.js';
import eventRoutes from './routes/event.route.js';
import feedbackRoutes from './routes/feedback.route.js';
import helpRoutes from './routes/help.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Proper CORS setup BEFORE routes
app.use(cors({
  origin: 'https://event-management-system-mern-1-s784.onrender.com',
  credentials: true,
}));

app.use(express.json()); // Allows us to accept JSON data in req.body

// API routes
app.use('/api/events', eventRoutes);
app.use('/api/users', userRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api/help', helpRoutes);

// Start the server after DB connection
app.listen(PORT, () => {
  connectDB();
  console.log('Server started at http://localhost:' + PORT);
});

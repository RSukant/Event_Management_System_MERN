import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from './config/db.js';
import cors from 'cors';

import userRoutes from './routes/user.route.js';
import eventRoutes from './routes/event.route.js';
import feedbackRoutes from './routes/feedback.route.js';
import helpRoutes from './routes/help.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); //allows us to accept json data in the req.body

app.use(cors());
app.use('/api/events', eventRoutes); //added event route
app.use('/api/users', userRoutes); //added user route
app.use('/api/feedback', feedbackRoutes); //added feedback route
app.use('/api/help', helpRoutes); //added help route

//postman desktop app

app.listen(PORT, () => {
    connectDB();
    console.log('Server started at http://localhost:' + PORT);
});

app.use(cors({
  origin: 'https://event-management-system-mern-1-s784.onrender.com',
  credentials: true
}));


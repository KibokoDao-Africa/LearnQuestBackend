// index.ts
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db';
import userRoutes from './routes/user.routes';
import courseRoutes from './routes/course.routes';
import stakeRoutes from './routes/stake.routes';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
connectDB();

app.use('/api/users', userRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/stake', stakeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

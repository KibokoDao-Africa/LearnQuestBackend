// routes/stake.routes.ts
import express from 'express';
import { stakeTokens } from '../controllers/stake.controller';

const router = express.Router();

router.post('/', stakeTokens);

export default router;

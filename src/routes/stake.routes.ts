
import express, { Request, Response } from 'express';
import { stakeTokens } from '../controllers/stake.controller';

const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
await stakeTokens(req, res);
});

export default router;
// routes/user.routes.ts
import express, { Request, Response } from 'express';
import { createUser, getUser } from '../controllers/user.controller';

const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
  await createUser(req, res);
});

router.get('/:walletAddress', async (req: Request, res: Response) => {
  await getUser(req, res);
});

export default router;
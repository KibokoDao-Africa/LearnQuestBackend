// controllers/stake.controller.ts
import { Request, Response } from 'express';
import Stake from '../models/Stake';
import { circles } from '../config/circles';

export const stakeTokens = async (req: Request, res: Response) => {
  try {
    const { userId, courseId, amount, type } = req.body;

    // Call smart contract function above
    // await circles.transfer({ from: userId, to: courseId, amount });

    const stake = await Stake.create({ user: userId, course: courseId, amount, type });
    res.status(201).json(stake);
  } catch (error) {
    res.status(500).json({ message: 'Error staking tokens' });
  }
};

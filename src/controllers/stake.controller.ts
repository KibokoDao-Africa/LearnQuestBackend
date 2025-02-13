// controllers/stake.controller.ts
import { Request, Response } from 'express';
import Stake from '../models/Stake';
import { initializeCirclesSdk } from '../config/circles';

export const stakeTokens = async (req: Request, res: Response) => {
  try {
    const { userId, courseId, amount, type } = req.body;

    const circlesInstance = await initializeCirclesSdk();
    if (!circlesInstance || !circlesInstance.sdk) {
      return res.status(500).json({ message: 'Circles SDK initialization failed' });
    }

    // Call smart contract function above
    // await circlesInstance.sdk.transfer({ from: userId, to: courseId, amount });

    const stake = await Stake.create({ user: userId, course: courseId, amount, type });
    res.status(201).json(stake);
  } catch (error) {
    console.error('Error staking tokens:', error);
    res.status(500).json({ message: 'Error staking tokens', error });
  }
};

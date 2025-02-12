// controllers/user.controller.ts
import { Request, Response } from 'express';
import User from '../models/User';

export const createUser = async (req: Request, res: Response) => {
  try {
    const { walletAddress } = req.body;
    let user = await User.findOne({ walletAddress });

    if (!user) {
      user = await User.create({ walletAddress });
    }

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error creating user' });
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const { walletAddress } = req.params;
    const user = await User.findOne({ walletAddress })
      .populate('createdCourses')
      .populate('enrolledCourses');

    if (!user) return res.status(404).json({ message: 'User not found' });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user' });
  }
};

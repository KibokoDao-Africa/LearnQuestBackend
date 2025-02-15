import { Request, Response } from 'express';
import Stake from '../models/Stake';
import { ethers, parseEther } from 'ethers';
import { contractAddress, contractABI, provider, signer } from '../config/ethers';

export const stakeTokens = async (req: Request, res: Response) => {
  try {
    const { userId, courseId, amount, type } = req.body;

    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    const tx = await contract.stake(courseId, parseEther(amount.toString()), type === 'support');
    await tx.wait();

    const stake = await Stake.create({ user: userId, course: courseId, amount, type });
    res.status(201).json(stake);
  } catch (error) {
    console.error('Error staking tokens:', error);
    res.status(500).json({ message: 'Error staking tokens', error });
  }
};

export const stakeTokensForUser = async (userId: string, courseId: string, amount: number, type: string) => {
  try {
    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    const tx = await contract.stake(courseId, parseEther(amount.toString()), type === 'support');
    await tx.wait();

    return await Stake.create({ user: userId, course: courseId, amount, type });
  } catch (error) {
    console.error('Error staking tokens:', error);
    throw error;
  }
};


import { Request, Response } from 'express';
import Stake from '../models/Stake';
import { ethers, parseEther } from 'ethers';
import dotenv from 'dotenv';
import { contractAddress, contractABI } from '../config/ethers';

dotenv.config();

const provider = new ethers.JsonRpcProvider(process.env.NETWORK_URL);
const signer = new ethers.Wallet(process.env.PRIVATE_KEY as string, provider);

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

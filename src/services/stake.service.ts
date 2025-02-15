import Stake from '../models/Stake';
import { ethers, parseEther } from 'ethers';
import dotenv from 'dotenv';
import { contractAddress, contractABI } from '../config/ethers';

dotenv.config();

const provider = new ethers.JsonRpcProvider(process.env.NETWORK_URL);
const signer = new ethers.Wallet(process.env.PRIVATE_KEY as string, provider);

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

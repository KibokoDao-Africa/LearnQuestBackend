// services/stake.service.ts
import Stake from '../models/Stake';
import { initializeCirclesSdk } from '../config/circles';

export const stakeTokensForUser = async (userId: string, courseId: string, amount: number, type: string) => {
  try {
    const circlesInstance = await initializeCirclesSdk();
    if (!circlesInstance || !circlesInstance.sdk) {
      throw new Error('Circles SDK initialization failed');
    }

    // Call smart contract function above
    // await circlesInstance.sdk.transfer({ from: userId, to: courseId, amount });
    
    return await Stake.create({ user: userId, course: courseId, amount, type });
  } catch (error) {
    console.error('Error staking tokens:', error);
    throw error;
  }
};

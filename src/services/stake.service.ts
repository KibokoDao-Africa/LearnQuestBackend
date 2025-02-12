// services/stake.service.ts
import Stake from '../models/Stake';
import { circles } from '../config/circles';

export const stakeTokensForUser = async (userId: string, courseId: string, amount: number, type: string) => {
//   Call smart contract function above
  await circles.transfer({ from: userId, to: courseId, amount });

  return await Stake.create({ user: userId, course: courseId, amount, type });
};

// services/user.service.ts
import User from '../models/User';

export const findOrCreateUser = async (walletAddress: string) => {
  let user = await User.findOne({ walletAddress });
  if (!user) {
    user = await User.create({ walletAddress });
  }
  return user;
};

export const getUserByWallet = async (walletAddress: string) => {
  return await User.findOne({ walletAddress }).populate('createdCourses').populate('enrolledCourses');
};

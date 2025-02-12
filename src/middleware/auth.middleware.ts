// middleware/auth.middleware.ts
import { Request, Response, NextFunction } from 'express';

export const authenticateUser = (req: Request, res: Response, next: NextFunction) => {
  const { walletAddress } = req.body;
  if (!walletAddress) {
    return res.status(401).json({ message: 'Unauthorized: No wallet address provided' });
  }
  next();
};


import { Circles } from '@circles-sdk/sdk';

type CirclesConfig = {
  apiKey: string;
};

export const circles = new Circles({
  apiKey: process.env.CIRCLES_API_KEY as string,
} as CirclesConfig);

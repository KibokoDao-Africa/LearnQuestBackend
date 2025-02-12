import { createCirclesClient } from '@circles-sdk/sdk';

export const circles = createCirclesClient({
  apiKey: process.env.CIRCLES_API_KEY as string,
});

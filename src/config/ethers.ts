import { ethers } from 'ethers';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.PRIVATE_KEY) {
  throw new Error("Missing PRIVATE_KEY in environment variables");
}

if (!process.env.NETWORK_URL) {
  throw new Error("Missing NETWORK_URL in environment variables");
}

const provider = new ethers.JsonRpcProvider(process.env.NETWORK_URL.trim());
const signer = new ethers.Wallet(process.env.PRIVATE_KEY.trim(), provider);

const contractAddress = 'your-contract-address';
const contractABI = [
  {
    "inputs": [
      { "internalType": "uint256", "name": "enrollmentId", "type": "uint256" },
      { "internalType": "uint256", "name": "amount", "type": "uint256" },
      { "internalType": "bool", "name": "agree", "type": "bool" }
    ],
    "name": "stake",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

export { provider, signer, contractAddress, contractABI };

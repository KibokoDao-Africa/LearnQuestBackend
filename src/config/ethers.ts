import { ethers } from 'ethers';
import dotenv from 'dotenv';

dotenv.config();

const provider = new ethers.JsonRpcProvider(process.env.NETWORK_URL);
const signer = new ethers.Wallet(process.env.PRIVATE_KEY as string, provider);

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

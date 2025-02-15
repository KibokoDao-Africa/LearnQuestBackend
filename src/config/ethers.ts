import { ethers } from 'ethers';

const provider = new ethers.JsonRpcProvider('https://your-ethereum-node-url');
const signer = new ethers.Wallet('your-private-key', provider);

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
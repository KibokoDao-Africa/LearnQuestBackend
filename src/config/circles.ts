// config/circles.ts
import { Sdk } from '@circles-sdk/sdk';
import { BrowserProviderContractRunner } from '@circles-sdk/adapter-ethers';
import { CirclesRpc, CirclesData } from '@circles-sdk/data';

type ChainConfig = {
  circlesRpcUrl: string;
  v1HubAddress: string;
  v2HubAddress: string;
  migrationAddress: string;
  nameRegistryAddress: string;
  profileServiceUrl: string;
  baseGroupMintPolicy: string;
};

const chainConfig: ChainConfig = {
  circlesRpcUrl: 'https://static.94.138.251.148.clients.your-server.de/rpc/',
  v1HubAddress: '0x29b9a7fbb8995b2423a71cc17cf9810798f6c543',
  v2HubAddress: '0x3D61f0A272eC69d65F5CFF097212079aaFDe8267',
  migrationAddress: '0x28141b6743c8569Ad8B20Ac09046Ba26F9Fb1c90',
  nameRegistryAddress: '0x8D1BEBbf5b8DFCef0F7E2039e4106A76Cb66f968',
  profileServiceUrl: 'https://static.94.138.251.148.clients.your-server.de/profiles/',
  baseGroupMintPolicy: '0x79Cbc9C7077dF161b92a745345A6Ade3fC626A60',
};

export const initializeCirclesSdk = async () => {
  try {
    const adapter = new BrowserProviderContractRunner();
    await adapter.init();

    const sdk = new Sdk(adapter, chainConfig);
    console.log('Circles SDK initialized:', sdk);

    const circlesRpc = new CirclesRpc(chainConfig.circlesRpcUrl);
    const circlesData = new CirclesData(circlesRpc);
    console.log('Circles Data initialized:', circlesData);

    return { sdk, circlesData };
  } catch (error) {
    console.error('Error initializing Circles SDK:', error);
    return null;
  }
};

// config/circles.ts

export const initializeCirclesSdk = async () => {
  try {
    const { BrowserProviderContractRunner } = await import('@circles-sdk/adapter-ethers');
    const { CirclesRpc, CirclesData } = await import('@circles-sdk/data');
    const { Sdk } = await import('@circles-sdk/sdk');
    
    const chainConfig = {
      circlesRpcUrl: 'https://static.94.138.251.148.clients.your-server.de/rpc/',
      v1HubAddress: '0x29b9a7fbb8995b2423a71cc17cf9810798f6c543',
      v2HubAddress: '0x3D61f0A272eC69d65F5CFF097212079aaFDe8267',
      migrationAddress: '0x28141b6743c8569Ad8B20Ac09046Ba26F9Fb1c90',
      nameRegistryAddress: '0x8D1BEBbf5b8DFCef0F7E2039e4106A76Cb66f968',
      profileServiceUrl: 'https://static.94.138.251.148.clients.your-server.de/profiles/',
      baseGroupMintPolicy: '0x79Cbc9C7077dF161b92a745345A6Ade3fC626A60',
    } as const;

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

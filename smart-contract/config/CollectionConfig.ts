import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.coredaotestnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'MDDTESTT',
  tokenName: 'MDDD TEST',
  tokenSymbol: 'MDDDTEST',
  hiddenMetadataUri: 'ipfs://bafybeiat7wj4agtwa34av6i3o6ex5tc4g4m5t72x2c66qhpf6gnz47fu3y/hidden.json',
  maxSupply: 4,
  whitelistSale: {
    price: 0.002,
    maxMintAmountPerTx: 2,
  },
  preSale: {
    price: 0.001,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.001,
    maxMintAmountPerTx: 1,
  },
  contractAddress: "0x98ca46bddd01d3854882cc5b2d46e0698446b356",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;

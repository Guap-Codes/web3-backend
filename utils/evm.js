// Importing required modules
const fs = require('fs'); // File System module
const ethers = require('ethers'); // Ethereum library

// Function to get or generate the wallet's private key
const walletKey = () => {
  const wPath = './utils/WalletConfig.json'; // Path to the wallet configuration file
  // Check if the wallet configuration file exists
  if (fs.existsSync(wPath)) {
    // If the file exists, read and return the private key from the JSON file
    return require('./WalletConfig.json').privateKey;
  }

  // If the file doesn't exist, generate a new random wallet
  const wallet = ethers.Wallet.createRandom();
  const key = wallet._signingKey(); // Extract the signing key from the wallet
  // Write the signing key to the wallet configuration file in JSON format
  fs.writeFileSync(wPath, JSON.stringify(key, undefined, 2));
  // Return the private key of the newly generated wallet
  return wallet.privateKey;
};

// Function to get the Ethereum address associated with the wallet's private key
const address = () => new ethers.Wallet(walletKey()).address;

// Function to get an array of available network names from the configuration
const availableNetworks = () => Object.keys(require('./ChainConfig.json'));

// Function to create an Ethereum JSON-RPC provider for a specific network
const provider = (network) =>
  new ethers.providers.JsonRpcProvider(
    require('./ChainConfig.json')[network].rpc
  );

// Function to create an Ethereum wallet signer for a specific network
const signer = (network) => new ethers.Wallet(walletKey(), provider(network));

// Export the utility functions for external use
module.exports = { address, availableNetworks, provider, signer };

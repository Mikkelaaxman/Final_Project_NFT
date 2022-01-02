require('dotenv').config()

const PrivateKeyProvider = require("@truffle/hdwallet-provider");
const privateKey = process.env.PRIVATE_KEY;
const privateKeyProvider = new PrivateKeyProvider(privateKey, process.env.ETH_NODE_URL);

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545, //change for different nodes. eg: Ganache, Besu or other testnet
      network_id: "*", // Match any network id
      gas: 5000000,
      from: process.env.PUBLIC_KEY,
      provider: privateKeyProvider
    }
  },
  compilers: {
    solc: {
      version: '^0.8.0',
      settings: {
        optimizer: {
          enabled: true, // Default: false
          runs: 200      // Default: 200
        },
      }
    }
  }
};

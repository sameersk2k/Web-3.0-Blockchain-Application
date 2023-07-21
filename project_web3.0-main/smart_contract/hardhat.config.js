require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/pBEgWLtPknEFcCp366Sh3OIdbI9z7SsW',
      accounts: ['your metamask private key'],
    },
  },
};
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/4D6QjKLXUFex1R0JTVGuY7TbL8c3SsSK',
      accounts: ['your metamask private key'],
    },
  },
};

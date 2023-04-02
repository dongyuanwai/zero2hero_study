require("@nomicfoundation/hardhat-toolbox");
require('@openzeppelin/hardhat-upgrades');
// require('hardhat-abi-exporter');

let dotenv = require('dotenv')
dotenv.config({ path: "./.env" })

// import "./tasks";

module.exports =  {
  solidity: "0.8.18",
  // Default network when you don't specify "--network {network_name}"
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    localhost: {
      url: "http://localhost:8545",
    },
    // goerli: {
    //   url: "https://goerli.infura.io/v3/" + process.env.INFURA_KEY,
    //   accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    // },
    // bnbtest: {
    //   url: process.env.BNBTest_URL || "",
    //   accounts: process.env.BNBTest_PRIVATE_KEY !== undefined ? [process.env.BNBTest_PRIVATE_KEY] : [],
    // },
  }
};


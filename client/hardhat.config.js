/* eslint-disable no-undef */
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

const { API_URL, PRIVATE_KEY } = process.env;

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.9",
  networks: {
    ganache: {
      url: API_URL,         // Uses the URL defined in the .env file
      accounts: [`0x${PRIVATE_KEY}`]  // Uses the private key defined in the .env file
    }
  },
  paths: {
    artifacts: "./src/components/artifacts",
  },
};

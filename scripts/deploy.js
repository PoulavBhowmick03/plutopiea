const hre = require("hardhat");

async function main() {


  const CrowdFunding = await hre.ethers.getContractFactory("CrowdFunding");

  const crowdFunding = await CrowdFunding.deploy();

  await crowdFunding.waitForDeployment();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

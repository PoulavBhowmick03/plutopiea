const hre = require("hardhat");

async function main() {


  const crowdFunding = await hre.ethers.deployContract("CrowdFunding", [unlockTime], {
    value: lockedAmount,
  });

  await crowdFunding.waitForDeployment();

  console.log(
    `Lock with ${ethers.formatEther(
      lockedAmount
    )}ETH and unlock timestamp ${unlockTime} deployed to ${lock.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

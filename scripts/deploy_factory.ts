import { run, ethers } from "hardhat";

async function main() {

  const UniswapV3Factory = await ethers.getContractFactory("UniswapV3Factory");
  const factory = await UniswapV3Factory.deploy();

  console.log("UniswapV3Factory deployed to:", factory.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
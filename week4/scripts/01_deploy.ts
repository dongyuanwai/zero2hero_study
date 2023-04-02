
import { ethers,upgrades } from "hardhat"
import { readAddressList, storeAddressList } from "./helper";

async function main() {

  const Base = await ethers.getContractFactory("Base")
  console.log("Deploying Base...")
  
  //部署合约  执行3笔交易  部署 代理合约 逻辑合约  proxyadmin合约
  const base = await upgrades.deployProxy(Base,[42], { initializer: 'initialize' })

  await base.deployed();
  console.log(base.address," base(proxy) address")

  const admin = await upgrades.erc1967.getAdminAddress(base.address);

  console.log(admin," AdminAddress");

  const implementation = await upgrades.erc1967.getImplementationAddress(base.address);

  console.log(implementation," ImplementationAddress")

  const addressList = readAddressList();

  addressList['proxy'] = base.address;
  addressList['admin'] = admin;
  addressList['implementation'] = implementation;
  storeAddressList(addressList);

}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
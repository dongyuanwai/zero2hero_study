
import { ethers,upgrades } from "hardhat"
import { readAddressList, storeAddressList } from "./helper";

const addressList = readAddressList();
const proxyAddress = addressList['proxy'];

async function main() {
  console.log(proxyAddress," original base(proxy) address");
  const BaseV1 = await ethers.getContractFactory("BaseV1");
  console.log("upgrade to BaseV1...");
  const baseV1 = await upgrades.upgradeProxy(proxyAddress, BaseV1);

  const implementation = await upgrades.erc1967.getImplementationAddress(baseV1.address);

  const admin = await upgrades.erc1967.getAdminAddress(baseV1.address);

  console.log(baseV1.address," baseV1 address(should be the same)")
  console.log(admin," AdminAddress");
  console.log(implementation," ImplementationAddress")

  addressList['proxyV1'] = baseV1.address;
  addressList['adminV1'] = admin;
  addressList['implementationV1'] = implementation;
  storeAddressList(addressList);
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})



// scripts/prepare_upgrade.js
async function main() {
  const proxyAddress = '0xa25B7dB27B3dd2EA76714CF804e99664aBAD7f22';
 
  const BoxV2 = await ethers.getContractFactory("BoxV2");
  console.log("Preparing upgrade...");
  const boxV2Address = await upgrades.prepareUpgrade(proxyAddress, BoxV2);
  console.log("BoxV2 prepared upgrade at:", boxV2Address);
}
 
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
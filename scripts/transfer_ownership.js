const { upgrades } = require("hardhat");

async function main(){
    const gnosisSafe = "0xa9AC6c7fF76690b5AE8F6C166A85e16AD03acD34";
    console.log("Transferring ownership of ProxyAdmin...");

    await upgrades.admin.transferProxyAdminOwnership(gnosisSafe);

    console.log("Transferred ownership of ProxyAdmin to:", gnosisSafe);
}

main()
    .then(() =>process.exit(0))
    .catch(error=>{
        console.error(error);
        process.exit(1);

    });
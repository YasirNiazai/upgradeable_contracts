// scripts/deploy.js

async function main(){
    const Box = await ethers.getContractFactory("Box");
    console.log("deploying Box contract");
    const box = await upgrades.deployProxy(Box, [42], {initializer: 'store'});
    console.log("Box deployed to ....",box.address);

}

main()
.then(() => process.exit(0))
.catch(error =>{
    console.error("error is thrown ...................",error);
    process.exit(1);
});
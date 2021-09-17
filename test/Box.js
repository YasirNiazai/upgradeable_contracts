    // test/Box.js
    // Load dependencies

    const {expect} = require("chai");
    const { ethers } = require("hardhat");

    let Box;
    let box;

    describe("Box",function(){
        beforeEach(async function (){
            Box = await ethers.getContractFactory("Box");
            box  =  await Box.deploy();

            await box.deployed();
        });

        it("retrive returns a value previously stoed", async function(){
            // store a value
            await box.store(42);

            // test if stored value is same one 
            // we need string to compare those values

            expect((await box.retrieve()).toString()).to.equal("42");
        });



    });
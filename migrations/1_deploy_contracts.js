const Test = artifacts.require("Test");

module.exports = function(deployer) {
  deployer.deploy(Test).then(() => {
    console.log(`Test contract Address: ${Test.address}`);
  });
};

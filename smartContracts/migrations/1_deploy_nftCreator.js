var nftCreator = artifacts.require("nftCreator");

module.exports = function(deployer) {
  deployer.deploy(nftCreator);
};

// migrations/NN_deploy_upgradeable_box.js
const { deployProxy } = require('@openzeppelin/truffle-upgrades');

const Box = artifacts.require('Box1');

module.exports = async function (deployer) {
  await deployProxy(Box, [], { deployer });
};
const { upgradeProxy } = require('@openzeppelin/truffle-upgrades');

const Box = artifacts.require('Box1');
const BoxV2 = artifacts.require('Box2');

module.exports = async function (deployer) {
  let existing = await Box.deployed();
  console.log('addr existing:',existing.address);
  
  const instance = await upgradeProxy(existing.address, BoxV2, { deployer });
  console.log("Upgraded", instance.address);
};


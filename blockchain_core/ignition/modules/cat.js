const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("CatModule", (m) => {
  const cat = m.contract(
    // contract name
    "abi",
    // contract constructor parameters
    ["https://cat.exemple.fr/token/{id}"]
  );

  return { cat: cat };
});

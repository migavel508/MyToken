const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");



module.exports = buildModule("SimpleTokenModule", (m) => {
  const address = m.getParameter("initialOwner","0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266")
  const SimpleToken = m.contract("MyToken",[address]) 
    return { SimpleToken };
});



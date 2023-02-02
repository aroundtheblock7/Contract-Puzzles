const { loadFixture } = require('@nomicfoundation/hardhat-network-helpers');
const { assert } = require('chai');

describe('Game3', function () {
  async function deployContractAndSetVariables() {
    const Game = await ethers.getContractFactory('Game3');
    const game = await Game.deploy();

    // Hardhat will create 10 accounts for you by default
    // you can get one of this accounts with ethers.provider.getSigner
    // and passing in the zero-based indexed of the signer you want:

    const signer = await ethers.provider.getSigner(0);


    return { game, signer };
  }

  it('should be a winner', async function () {
    const { game, signer } = await loadFixture(deployContractAndSetVariables);

    const signer2 = ethers.provider.getSigner(2);
    const signer3 = ethers.provider.getSigner(3)

    const addr1 = await signer.getAddress();
    console.log('Address of signer (address1) is: ' + addr1);
    const addr2 = await signer2.getAddress();
    console.log('Address for address2 is ' + addr2);
    const addr3 = await signer3.getAddress();
    console.log('Address for address3 is "' + addr3);

    // you'll need to update the `balances` mapping to win this stage
    // to call a contract as a signer you can use contract.connect
    await game.connect(signer).buy( {value: ethers.utils.parseEther("20")} );
    await game.connect(signer2).buy( {value: ethers.utils.parseEther("30")} );
    await game.connect(signer3).buy( {value: ethers.utils.parseEther("10")} );

    //console.log('Balance of signer is: ' + game.balances.addr1);

    // TODO: win expects three arguments
    await game.win(addr1, addr2, addr3);

    // leave this assertion as-is
    assert(await game.isWon(), 'You did not win the game');
  });
});

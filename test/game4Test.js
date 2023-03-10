const { loadFixture } = require('@nomicfoundation/hardhat-network-helpers');
const { assert } = require('chai');

describe('Game4', function () {
  async function deployContractAndSetVariables() {
    const Game = await ethers.getContractFactory('Game4');
    const game = await Game.deploy();

    return { game };
  }
  it('should be a winner', async function () {
    const { game } = await loadFixture(deployContractAndSetVariables);

    const signerX = ethers.provider.getSigner(0);
    const signerY = ethers.provider.getSigner(1);

    const addressX = await signerX.getAddress();
    console.log(addressX);
    const addressY = await signerY.getAddress();
    console.log(addressY);
    // nested mappings are rough :}
    await game.connect(signerY).write(addressX);

    await game.win(addressY);

    // leave this assertion as-is
    assert(await game.isWon(), 'You did not win the game');
  });
});

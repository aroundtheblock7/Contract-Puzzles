<img width="1203" alt="Screen Shot 2023-01-17 at 4 45 38 PM" src="https://user-images.githubusercontent.com/81759076/216374105-edd33c48-e02f-4e33-8bf1-18312a8f8529.png">

## Contract Puzzles

The goal of the Smart Contract puzzles is to work on reading smart contracts and writing good tests to modify smart contracts.

Each Game contract has a storage variable called `isWon`:

```
bool public isWon;
```

The objective is to set this `isWon` to `true` without modifying the smart contract.

At the same time, you're more than welcome to use `console.log` from hardhat if you need to [debug your smart contracts](https://hardhat.org/tutorial/debugging-with-hardhat-network.html#solidity-console-log).

### Running the tests

First, install all the dependencies with `npm i`. Then, you can run all tests at once by running `npx hardhat test`. However, this might be frustrating when you are just trying to test an individual game.

If you are working on `Game1`, for instance, it will make more sense to run the test cases for the first game: `npx hardhat test test/game1Test.js`. Each Game contract will have a corresponding test file.

Your goal is to modify the tests to make the test case pass without modifying the smart contract (and leaving the `isWon` assertion in place).


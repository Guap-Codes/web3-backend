const app = require('./utils/setup');
const { address, availableNetworks, provider, signer } = require('./utils/evm');
const { ethers } = require('ethers');

// Route for the root URL
app.get('/', (req, res) =>
  res.status(200).json({
    message: 'Hello World! My Ethereum wallet address is: ' + address(),
    availableNetworks: availableNetworks(),
  })
);

// Function to get wallet balance in ethers for a specific network
const balance = async (network) => {
  const result = await provider(network).getBalance(address());
  return ethers.utils.formatEther(result);
};

// Route for checking wallet balance and sending transactions
app.route('/balance/:network')
  .get(async (req, res) => {
    try {
      const { network } = req.params;
      const value = await balance(network);
      res.status(200).json({
        message: 'My balance is ' + value + ' ethers',
      });
    } catch (e) {
      const error = e.toString();
      res.status(400).json({ error });
    }
  })
  .post(async (req, res) => {
    try {
      const { network } = req.params;
      const { to, amount } = req.body;
      const value = ethers.utils.parseEther(amount);
      const tx = await signer(network).sendTransaction({ to, value });
      await tx.wait();
      res.status(200).json('ok');
    } catch (e) {
      const error = e.toString();
      res.status(400).json({ error });
    }
  });

// Route for checking token balance of a specific ERC-20 token
app.get('/token-balance/:network/:tokenAddress', async (req, res) => {
  try {
    const { network, tokenAddress } = req.params;
    // Implement logic to get token balance using appropriate ERC-20 contract
    // Example:
    // const tokenContract = new ethers.Contract(tokenAddress, abi, provider(network));
    // const tokenBalance = await tokenContract.balanceOf(address());
    // res.status(200).json({
    //   message: 'My token balance is ' + tokenBalance.toString() + ' tokens',
    // });
  } catch (e) {
    const error = e.toString();
    res.status(400).json({ error });
  }
});

// Route for checking gas price on a specific network
app.get('/gas-price/:network', async (req, res) => {
  try {
    const { network } = req.params;
    const gasPrice = await provider(network).getGasPrice();
    res.status(200).json({
      gasPrice: gasPrice.toString(),
    });
  } catch (e) {
    const error = e.toString();
    res.status(400).json({ error });
  }
});

// Add more routes based on the use case.
module.exports = app;

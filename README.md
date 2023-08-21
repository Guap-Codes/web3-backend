# Web3 Backend

This repository contains a backend server built using Express.js for interacting with Ethereum networks and managing Ethereum wallet-related operations. The server exposes various routes to interact with Ethereum wallets, check balances, and perform transactions on different networks.

## Getting Started

### Prerequisites

- Node.js: Make sure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Guap-Codes/web3-backend.git
   ```

2. Navigate to the project directory:

   ```bash
   cd web3-backend
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the project root and provide environment-specific variables:

   ```env
   PORT=8080
   # Add other environment variables as needed
   ```

5. Start the server:

   ```bash
   npm start
   ```

The server will start at `http://localhost:8080`.

## Routes

### `GET /`

- Returns a JSON object with a welcome message and the Ethereum wallet address associated with the server's private key, as well as available network names.

### `GET /balance/:network`

- Retrieves the balance of the Ethereum wallet address on the specified network and returns it as a formatted value in ethers.

### `POST /balance/:network`

- Sends a transaction from the Ethereum wallet to the specified recipient address with a specified amount in ethers.

### `GET /token-balance/:network/:tokenAddress`

- Retrieves the balance of a specific ERC-20 token for the Ethereum wallet address on the specified network. (Implement your logic for ERC-20 token balance retrieval.)

### `GET /gas-price/:network`

- Retrieves the current gas price on the specified Ethereum network.

## Additional Routes

Feel free to add more routes based on your requirements. Consider routes for interacting with other smart contracts, checking transaction history, transferring tokens, and more.

## Dependencies

- Express.js: Web server framework
- ethers: Ethereum library for interactions
- dotenv: Loads environment variables from `.env` file
- cors: Cross-Origin Resource Sharing middleware
- body-parser: Middleware for parsing JSON requests

## Security

Please ensure to follow security best practices when deploying this backend to a production environment. Handle private keys, API keys, and sensitive information securely. Use proper input validation, authentication, and authorization mechanisms to protect your application.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to customize and expand upon this README according to your project's specific details, architecture, and needs.

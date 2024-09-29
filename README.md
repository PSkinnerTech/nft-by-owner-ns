# Get All NFTs from a Solana Wallet

This project contains a TypeScript script that retrieves all NFTs associated with a Solana wallet using the Helius API.

## What does getAllNftsFromAWallet.ts do?

The `getAllNftsFromAWallet.ts` script:

1. Connects to the Helius API using your API key.
2. Sends a POST request to the Helius RPC endpoint.
3. Uses the `getAssetsByOwner` method to fetch all NFTs associated with a specific wallet.
4. Logs the response data to the console.

## How to use it

1. Ensure you have Node.js and npm installed on your system.

2. Clone this repository and navigate to the project directory.

3. Install the required dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your Helius API key:
   ```
   HELIUS_API_KEY=your_api_key_here
   ```

5. Run the script using ts-node:
   ```
   npx ts-node getAllNftsFromAWallet.ts
   ```

## Note

This script currently fetches NFTs for a hardcoded wallet address. To use it for a different wallet, you'll need to modify the `params` in the request body of the `getAllNftsFromAWallet.ts` file.

## Dependencies

- node-fetch: For making HTTP requests
- dotenv: For loading environment variables
- @types/node: TypeScript definitions for Node.js
- ts-node: For running TypeScript files directly
- typescript: The TypeScript compiler# Get-All-NFTs-by-Owner
# nft-by-owner-ns

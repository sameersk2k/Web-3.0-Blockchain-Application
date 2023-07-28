# Web-3.0-Blockchain-Application
A Blockchain Application using Web 3.0, solidity, JavaScript that can send ethereum (Sepolia).

The UI has been designed with the help of Tailwind CSS and viteReact.

<img width="1111" alt="Screenshot 2023-07-22 at 1 12 54 AM" src="https://github.com/sameersk2k/Web-3.0-Blockchain-Application/assets/115322069/86456b93-11d8-4b95-8de7-3e2cf53b7822">

## Commands
```
npm install vite@latest                                            inside client folder
npm install -D tailwindcss postcss prefixer                         inside client folder

```
```
npm install --save-dev hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers
```
## Sepolia Faucet Link
```
https://sepoliafaucet.com/
```
You will be asked to create a Alchemy account.

### Command to deploy contract
```
npx hardhat run scripts/deploy.js --network sepolia
```

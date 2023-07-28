# Web-3.0-Blockchain-Application
A Blockchain Application using Web 3.0, solidity, JavaScript that can send ethereum (Sepolia).

The UI has been designed with the help of Tailwind CSS and viteReact.

<img width="1438" alt="Screenshot 2023-07-28 at 5 46 25 PM" src="https://github.com/sameersk2k/Web-3.0-Blockchain-Application/assets/115322069/ed3a1121-8ddc-456f-9697-e9ff574d1ac1">


## Commands
```
npm init vite@latest                                            inside client folder
npm install
npm run dev
npm install react-icons ethers@5.7.2

npm install -D tailwindcss postcss prefixer                         inside client folder
npx tailwindcss init -p

npm init -y                inside smart_contract to create package.json

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

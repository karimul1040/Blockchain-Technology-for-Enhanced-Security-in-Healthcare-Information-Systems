let web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

const healthcareContractAddress = "0xYourContractAddress";
const healthcareContractABI = [
];

const contract = new web3.eth.Contract(healthcareContractABI, healthcareContractAddress);

async function registerUser(name, email, password) {
    const accounts = await web3.eth.getAccounts();
    contract.methods.registerUser(name, email, password).send({ from: accounts[0] });
    console.log("User registered on blockchain");
}

async function authenticateUser(email, password) {
    const accounts = await web3.eth.getAccounts();
    contract.methods.authenticateUser(email, password).call({ from: accounts[0] }).then((result) => {
        if (result) {
            console.log("User authenticated!");
        } else {
            console.log("Authentication failed.");
        }
    });
}

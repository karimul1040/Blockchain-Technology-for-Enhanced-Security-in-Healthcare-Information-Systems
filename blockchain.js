// Connect to Ethereum
let web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

const healthcareContractAddress = "0xYourContractAddress";
const healthcareContractABI = [
];

const contract = new web3.eth.Contract(healthcareContractABI, healthcareContractAddress);

async function fetchPatientData(patientID) {
    try {
        const accounts = await web3.eth.getAccounts();
        const patientData = await contract.methods.getPatientRecord(patientID).call({ from: accounts[0] });
        
        document.getElementById("patientName").textContent = patientData.name;
        document.getElementById("patientAge").textContent = patientData.age;
        document.getElementById("diagnosis").textContent = patientData.diagnosis;
        document.getElementById("transactionID").textContent = patientData.transactionID;
        document.getElementById("verifiedStatus").textContent = patientData.verified ? "Verified" : "Unverified";
        document.getElementById("timestamp").textContent = patientData.timestamp;
        
    } catch (error) {
        console.error("Error fetching patient data:", error);
    }
}

window.onload = function() {
    fetchPatientData("12345"); 
};

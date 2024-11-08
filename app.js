document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    // Authenticate User (Integrate with backend blockchain authentication)
    console.log("Login with", email, password);
});

document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("emailRegister").value;
    let password = document.getElementById("passwordRegister").value;
    // Register User (Integrate with blockchain registration)
    console.log("Registering", name, email, password);
});

function viewRecords() {
    // Fetch records from blockchain
    console.log("Viewing Medical Records...");
}

function makeAppointment() {
    // Schedule appointment and save to blockchain
    console.log("Making Appointment...");
}
s
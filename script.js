// Define the correct password
const correctPassword = "mySecretPassword";  // Change this to your desired password

// Function to check the entered password
function checkPassword() {
    // Get the value entered in the password input field
    const enteredPassword = document.getElementById('password').value;

    // Check if the entered password matches the correct password
    if (enteredPassword === correctPassword) {
        // If the password is correct, redirect to the homepage or unlock content
        window.location.href = "homepage.html";  // Change to the page you want to show after login
    } else {
        // If the password is incorrect, show an error message
        document.getElementById('error').innerText = "Incorrect password. Please try again.";
    }
}

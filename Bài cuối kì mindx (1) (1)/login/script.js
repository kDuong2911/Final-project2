const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", function() {
    const inputValue = document.getElementById("custom-input-field").value;
    console.log("Input value:", inputValue);
});

const signupForm = document.getElementById("signup-form");

signupForm.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;


    if (password === confirmPassword) {
        localStorage.setItem("username", username);

        console.log("Signup successful. Username stored in local storage:", username);
    } else {
        console.log("Password and confirm password do not match.");
    }
});

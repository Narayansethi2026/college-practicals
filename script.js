// Registration Validation

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function(event) {

        event.preventDefault();

        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        alert("Registration successful!");

        registerForm.reset();
    });
}


// Login Validation

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        let email = document.getElementById("loginEmail").value;
        let password = document.getElementById("loginPassword").value;

        if (email === "" || password === "") {
            alert("Please fill all fields.");
            return;
        }

        alert("Login successful!");

    });
}
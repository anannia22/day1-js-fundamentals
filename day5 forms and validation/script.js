const form = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const userError = document.getElementById("userError");
const passError = document.getElementById("passError");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    
    if (username.value.trim() === "") {
        userError.textContent = "Username is required";
        isValid = false;
    } else {
        userError.textContent = "";
    }

    
    if (password.value.trim() === "") {
        passError.textContent = "Password is required";
        isValid = false;
    } else if (password.value.length < 6) {
        passError.textContent = "Password must be at least 6 characters";
        isValid = false;
    } else {
        passError.textContent = "";
    }

    if (isValid) {
        alert("Login successful!");
        form.reset();
    }
});
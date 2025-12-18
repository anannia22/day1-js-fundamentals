
const form = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");

const userError = document.getElementById("userError");
const passError = document.getElementById("passError");


form.addEventListener("submit", (e) => {
    e.preventDefault(); 

  
    userError.textContent = "";
    passError.textContent = "";

    let isValid = true;

    
    if (username.value.trim() === "") {
        userError.textContent = "Username is required";
        isValid = false;
    }

    
    if (password.value.trim() === "") {
        passError.textContent = "Password is required";
        isValid = false;
    }

   
    if (isValid) {
        alert("Login Successful!");
        form.reset();
    }
});

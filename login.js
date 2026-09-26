let email = document.querySelector("#email");
let password = document.querySelector("#password");
let signIn = document.querySelector("#loginsign");
let message = document.querySelector("#message");

signIn.addEventListener("click", () => {

    let emailValue = email.value;
    let passwordValue = password.value;

    if (emailValue == "" || passwordValue == "") {
        message.innerText = "Please enter email and password";
        
    
    }
    else {
        localStorage.setItem("isLoggedIn", "true");
         window.location.href = "index.html";
    }

});


var loginUserData =[]
fetch("demu.json")
    
        .then(response => response.json())
        .then(data => {
            loginUserData =data
        })
        


function login() {
    const userInput = document.getElementById("username").value;
    const passInput = document.getElementById("password").value;
    const messageBox = document.getElementById("message");
 const validUser = loginUserData.find(user =>
                user.username === userInput && user.password === passInput
            );

            if (validUser) {
                messageBox.innerHTML = `
                    <div class="alert alert-success">Login Successful! 🎉</div>
                `;
            } else {
                messageBox.innerHTML = `
                    <div class="alert alert-danger">Invalid Username or Password!</div>
                `;
            }
   
        
        
}
function togglePassword() {
    const pass = document.getElementById("password");
    const eye = document.getElementById("eye-icon");


    if (pass.type === "password") {
        pass.type = "text";
        eye.innerText = "👁️";
    } else {
        pass.type = "password";
        eye.innerText = "🙈";

    }
}


let logInprofile = JSON.parse(localStorage.getItem("logInprofile"))
    console.log(logInprofile);
    if (logInprofile) {
        username.innerHTML = logInprofile.username
    }
    else {
        setTimeout(() => {
            alert("you're not allowed on this  page, please Sign Up/log In")
            window.location.href = "login.html"
        }, 5000);
    }

    
    function Userlogout() {
        localStorage.removeItem("logInprofile")
        window.location.href = "login.html"
    }
    function UserSignup() {
        localStorage.removeItem("logInprofile")
        window.location.href="signup.html"
    }
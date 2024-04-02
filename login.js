let email = document.getElementById("email")
let password = document.getElementById("password")
let userdetails = JSON.parse(localStorage.getItem("userdetails"))
console.log(userdetails);
function login() {
   console.log(password.value, email.value);
   let txt = userdetails.find((user) => user.email == email.value && user.passsword == password.value)
   console.log(txt);
   if (email.value == '' || password.value == '') {
      alert('all field are mandatory')
   }
   else if (txt) {
      alert(`Login Successful ${email.value}`)
   }
   else {
      alert('account not registered')
   }
   let details = {
      email: email.value,
      password: password.value
   }
   console.log(details);
}
showhider.innerHTML = "show"
function showandhid() {
   password.type == 'password' ? password.type = 'text' : password.type = 'password'
   showhider.innerHTML == 'show' ? showhider.innerHTML = 'hide' : showhider.innerHTML = 'show'
}
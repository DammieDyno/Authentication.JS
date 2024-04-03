let username = document.getElementById("username")
let email = document.getElementById("email")
let password = document.getElementById("password")
let confirmPassword = document.getElementById("confirm password")
let checker = document.getElementById("checker")

let store = []  && JSON.parse(localStorage.getItem("userdetails"))
function signUp() {
    if (username.value == '' || email.value == '' || password.value == '' || confirmPassword.value == '') {
        alert('all field are mandatory')
    } else if (password.value !== confirmPassword.value) {
        alert("password doesn't match")
    } else if (checker.checked !== true) {
        alert('agree with the term and condition')
    } else if (password.value.length >= 8 && confirmPassword >= 8) {
        alert("enter more than 8 password")
    }
    else {
        let dataStorage = {
            username: username.value,
            email: email.value,
            passsword: password.value,
            confirmPassword: confirmPassword.value,
            checker: checker.checked
        }
        
        const exist = store.find(ex=> ex.email == email.value)
        console.log(exist);
        if(exist){
            alert('User already Exist')
        }
        else{
            store.push(dataStorage)
            localStorage.setItem("userdetails",JSON.stringify(store))
            window.location.href="login.html"
            alert(`sign up successful ${username.value}`)
            console.log(store);
            showTable() 
        }
    }

    username.value = ''
    email.value = ''
    password.value =''
    confirmPassword.value = ''
    checker.checked = false
}

showandhider.innerHTML="show"
function showandhide() {
    password.type =='password' ? password.type ="text" : password.type = "password" 
    showandhider.innerHTML =="show" ? showandhider.innerHTML ="hide" : showandhider.innerHTML = "show"   
}
showrest.innerHTML="view"
function showplan() {
    confirmPassword.type =='confirmPassword' ? confirmPassword.type ="text" : confirmPassword.type = "confirmPassword" 
    showrest.innerHTML =="view" ? showrest.innerHTML ="hide" : showrest.innerHTML = "view"   
}

let showTable = () =>{
    table.innerHTML =''

    datas.forEach((data, index)=> {
        table.innerHTML +=`<tr id="carry"> <td id="idd">${data.username}</td><td id="idd">${data.email} <td id="idd">${data.confirmPassword}</td> <td id="idd">${data.checker}</tr>`
    });
}


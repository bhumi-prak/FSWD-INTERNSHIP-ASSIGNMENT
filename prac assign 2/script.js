document.getElementById("registerForm").addEventListener("submit", function(e){

e.preventDefault(); // prevent page reload

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;
let confirmPassword = document.getElementById("confirmPassword").value;

let valid = true;


// Name validation
if(name === ""){
document.getElementById("nameError").textContent = "Name cannot be empty";
valid = false;
}else{
document.getElementById("nameError").textContent = "";
}


// Email validation
if(!email.includes("@")){
document.getElementById("emailError").textContent = "Email must contain @";
valid = false;
}else{
document.getElementById("emailError").textContent = "";
}


// Password length validation
if(password.length < 6){
document.getElementById("passwordError").textContent = "Password must be at least 6 characters";
valid = false;
}else{
document.getElementById("passwordError").textContent = "";
}


// Confirm password validation
if(password !== confirmPassword){
document.getElementById("confirmError").textContent = "Passwords do not match";
valid = false;
}else{
document.getElementById("confirmError").textContent = "";
}


// If all valid
if(valid){
alert("Registration Successful");
}

});
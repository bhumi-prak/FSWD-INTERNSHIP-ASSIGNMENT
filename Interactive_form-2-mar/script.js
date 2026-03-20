document.getElementById("myForm").addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

let message = document.getElementById("message");

if(name === "" || email === "" || password === ""){

message.style.color = "red";
message.textContent = "All fields are required";

}

else if(!email.includes("@")){

message.style.color = "red";
message.textContent = "Enter a valid email";

}

else if(password.length < 6){

message.style.color = "red";
message.textContent = "Password must be at least 6 characters";

}

else{

message.style.color = "green";
message.textContent = "Form submitted successfully!";

}

});
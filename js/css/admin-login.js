/* ==========================
   MRFX Admin Login JS
========================== */

document.addEventListener(
"DOMContentLoaded",

()=>{

const form =
document.getElementById(
"loginForm"
);

form.addEventListener(
"submit",
adminLogin
);

}
);

/* ==========================
   ADMIN LOGIN
========================== */

function adminLogin(e){

e.preventDefault();

const email =
document.getElementById(
"email"
).value;

const password =
document.getElementById(
"password"
).value;

/* Demo Login */

if(

email ===
"admin@mrfx.com"

&&

password ===
"admin123"

){

const token =

"MRFX_JWT_TOKEN";

localStorage.setItem(
"token",
token
);

alert(
"Login Successful"
);

window.location.href =
"dashboard.html";

}

else{

alert(
"Invalid Credentials"
);

}

}

/* ==========================
   FUTURE SPRING BOOT API
========================== */

/*

async function adminLogin(e){

e.preventDefault();

const email =
document.getElementById(
"email"
).value;

const password =
document.getElementById(
"password"
).value;

const response =
await fetch(

"http://localhost:8080/api/admin/login",

{

method:"POST",

headers:{
"Content-Type":
"application/json"
},

body:JSON.stringify({

email,
password

})

}

);

const data =
await response.json();

localStorage.setItem(

"token",

data.token

);

window.location.href =
"dashboard.html";

}

*/

/* ==========================
   TOKEN CHECK
========================== */

function checkAuth(){

const token =
localStorage.getItem(
"token"
);

if(!token){

window.location.href =
"admin-login.html";

}

}

/* ==========================
   LOGOUT
========================== */

function logout(){

localStorage.removeItem(
"token"
);

window.location.href =
"admin-login.html";

}

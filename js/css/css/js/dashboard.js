/* ==================================
   MRFX Dashboard JS
================================== */

/* AUTH CHECK */

(function(){

const token =
localStorage.getItem(
"token"
);

if(!token){

window.location.href =
"admin-login.html";

}

})();

/* ==================================
   ANALYTICS COUNTER
================================== */

function animateCounter(
id,
start,
end,
duration
){

let obj =
document.getElementById(id);

let range =
end - start;

let current =
start;

let increment =
range / 100;

let stepTime =
duration / 100;

let timer =
setInterval(()=>{

current += increment;

if(current >= end){

current = end;

clearInterval(timer);

}

obj.innerText =
Math.floor(current);

},stepTime);

}

window.onload = ()=>{

animateCounter(
"customers",
0,
150,
2000
);

animateCounter(
"bookings",
0,
85,
2000
);

animateCounter(
"photos",
0,
12450,
2500
);

};

/* ==================================
   LOGOUT
================================== */

function logout(){

const confirmLogout =
confirm(
"Logout from Dashboard?"
);

if(confirmLogout){

localStorage.removeItem(
"token"
);

window.location.href =
"admin-login.html";

}

}

/* ==================================
   GALLERY CODE GENERATOR
================================== */

function generateGalleryCode(){

const prefix =

[
"WED",
"BIR",
"PRE",
"EVT"
];

const randomPrefix =

prefix[
Math.floor(
Math.random()
* prefix.length
)
];

const randomNumber =

Math.floor(
1000 +
Math.random()
* 9000
);

const year =

new Date()
.getFullYear();

const code =

`MRFX-${year}-${randomPrefix}-${randomNumber}`;

alert(
"Generated Code : \n\n"
+ code
);

return code;

}

/* ==================================
   BUTTON EVENT
================================== */

document.addEventListener(
"DOMContentLoaded",

()=>{

const buttons =
document.querySelectorAll(
".dashboard-section button"
);

if(buttons.length > 1){

buttons[1]
.addEventListener(
"click",

generateGalleryCode

);

}

}
);

/* ==================================
   CUSTOMER SEARCH
================================== */

function searchCustomer(){

const keyword =

prompt(
"Enter Customer Name"
);

if(!keyword){

return;

}

alert(
"Searching : "
+ keyword
);

/*

Backend API

GET

/api/customers/search

*/

}

/* ==================================
   REVENUE CALCULATOR
================================== */

function calculateRevenue(){

const bronze = 10 * 4999;

const silver = 8 * 9999;

const gold = 6 * 19999;

const diamond = 3 * 49999;

const total =

bronze +
silver +
gold +
diamond;

console.log(
"Revenue : ₹"
+ total
);

}

calculateRevenue();

/* ==================================
   FILE UPLOAD PREVIEW
================================== */

function previewFiles(event){

const files =
event.target.files;

console.log(
files.length
+
" Files Selected"
);

}

/* ==================================
   ACTIVITY LOGGER
================================== */

function addActivity(
message
){

const list =
document.querySelector(
".activity-list"
);

if(!list){

return;

}

const li =
document.createElement(
"li"
);

li.innerText =
message;

list.prepend(
li
);

}

addActivity(
"Dashboard Loaded"
);

/* ==================================
   DATE & TIME
================================== */

function updateDateTime(){

const now =
new Date();

console.log(
now.toLocaleString()
);

}

setInterval(
updateDateTime,
1000
);

/* ==================================
   FUTURE API MODULES

GET
/api/analytics

GET
/api/customers

POST
/api/upload

POST
/api/gallery

DELETE
/api/customer

JWT AUTH

================================== */

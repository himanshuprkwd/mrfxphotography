/* ============================
   MRFX Gallery JavaScript
============================ */

let currentImage = "";

/* ============================
   DEMO PHOTO DATA
============================ */

const demoPhotos = [

{
id:1,
image:"images/photo1.jpg"
},

{
id:2,
image:"images/photo2.jpg"
},

{
id:3,
image:"images/photo3.jpg"
},

{
id:4,
image:"images/photo4.jpg"
},

{
id:5,
image:"images/photo1.jpg"
},

{
id:6,
image:"images/photo2.jpg"
}

];

/* ============================
   VERIFY CODE
============================ */

function verifyCode(){

const code =
document.getElementById(
"accessCode"
).value;

if(code.trim()===""){

alert(
"Please Enter Gallery Code"
);

return;

}

/* Future Backend API

fetch(
`http://localhost:8080/api/gallery/${code}`
)

*/

alert(
"Gallery Access Granted"
);

loadPhotos();

}

/* ============================
   LOAD PHOTOS
============================ */

function loadPhotos(){

const gallery =
document.getElementById(
"galleryGrid"
);

gallery.innerHTML = "";

demoPhotos.forEach(photo=>{

gallery.innerHTML += `

<div
class="gallery-item">

<img
src="${photo.image}"
onclick="
openModal(
'${photo.image}'
)
">

<div class="watermark">

MRFX.ADITYA

</div>

</div>

`;

});

}

/* ============================
   OPEN MODAL
============================ */

function openModal(image){

currentImage = image;

const modal =
document.getElementById(
"photoModal"
);

const modalImage =
document.getElementById(
"modalImage"
);

modal.style.display =
"flex";

modalImage.src =
image;

}

/* ============================
   CLOSE MODAL
============================ */

function closeModal(){

document.getElementById(
"photoModal"
).style.display =
"none";

}

/* ============================
   DOWNLOAD PHOTO
============================ */

function downloadPhoto(){

if(currentImage===""){

return;

}

const link =
document.createElement(
"a"
);

link.href =
currentImage;

link.download =
"MRFX_PHOTO";

document.body.appendChild(
link
);

link.click();

document.body.removeChild(
link
);

}

/* ============================
   ESC KEY CLOSE
============================ */

document.addEventListener(
"keydown",

function(event){

if(
event.key === "Escape"
){

closeModal();

}

}
);

/* ============================
   OUTSIDE CLICK CLOSE
============================ */

window.onclick =
function(event){

const modal =
document.getElementById(
"photoModal"
);

if(
event.target === modal
){

closeModal();

}

}

/* ============================
   FUTURE BACKEND
============================ */

/*

API Endpoints

GET

/api/gallery/{code}

GET

/api/photos/customer/{id}

POST

/api/download-log

JWT Protected

*/

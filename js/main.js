aur isko kaha /* ====================================
   MRFX.ADITYA Photography Website
   Main JavaScript File
==================================== */

// WEBSITE LOADED

window.addEventListener("load", () => {

    console.log(
        "MRFX Photography Loaded"
    );

});

/* ===========================
   GALLERY ACCESS
=========================== */

function openGallery() {

    const code =
        document.getElementById(
            "galleryCode"
        ).value;

    if (code === "") {

        alert(
            "Please Enter Gallery Code"
        );

        return;
    }

    localStorage.setItem(
        "galleryCode",
        code
    );

    alert(
        "Gallery Code Saved"
    );

    // Future Backend API

    /*
    window.location.href =
    "gallery.html";
    */
}

/* ===========================
   BOOKING FORM
=========================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const form =
            document.querySelector(
                "form"
            );

        if (form) {

            form.addEventListener(
                "submit",
                submitBooking
            );

        }

    }
);

function submitBooking(e) {

    e.preventDefault();

    const inputs =
        document.querySelectorAll(
            "form input, form select"
        );

    let bookingData = {};

    bookingData.name =
        inputs[0].value;

    bookingData.phone =
        inputs[1].value;

    bookingData.email =
        inputs[2].value;

    bookingData.event =
        inputs[3].value;

    console.log(
        bookingData
    );

    alert(
        "Booking Request Submitted Successfully!"
    );

    // Future Spring Boot API

    /*
    fetch("http://localhost:8080/api/bookings",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(bookingData)
    })
    */

    e.target.reset();
}

/* ===========================
   NAVBAR SCROLL EFFECT
=========================== */

window.addEventListener(
    "scroll",
    () => {

        const nav =
            document.querySelector(
                ".navbar"
            );

        if (
            window.scrollY > 100
        ) {

            nav.style.background =
                "rgba(0,0,0,0.9)";

        } else {

            nav.style.background =
                "rgba(0,0,0,0.4)";
        }
    }
);

/* ===========================
   SMOOTH SCROLL
=========================== */

document
.querySelectorAll(
'a[href^="#"]'
)

.forEach(anchor => {

anchor.addEventListener(
"click",

function (e) {

e.preventDefault();

document
.querySelector(
this.getAttribute(
"href"
)
)

.scrollIntoView({

behavior:"smooth"

});

});

});

/* ===========================
   HERO ANIMATION
=========================== */

const heroTitle =
document.querySelector(
".hero h1"
);

if(heroTitle){

heroTitle.animate(

[
{
opacity:0,
transform:
"translateY(-50px)"
},

{
opacity:1,
transform:
"translateY(0px)"
}
],

{
duration:1500
}

);

}

/* ===========================
   CARD HOVER EFFECT
=========================== */

const cards =
document.querySelectorAll(
".card,.price-card"
);

cards.forEach(card=>{

card.addEventListener(
"mouseenter",

()=>{

card.style.transform =
"translateY(-10px)";

}
);

card.addEventListener(
"mouseleave",

()=>{

card.style.transform =
"translateY(0px)";

}
);

});

/* ===========================
   WHATSAPP QUICK MESSAGE
=========================== */

function openWhatsapp(){

const message =

`Hello Mrfx.Aditya,

I visited your website and
I am interested in your
photography services.

Please share details.

Thank You`;

const url =

"https://wa.me/919554153223?text="

+

encodeURIComponent(
message
);

window.open(
url,
"_blank"
);

}

/* ===========================
   PACKAGE SELECTION
=========================== */

function selectPackage(
packageName
){

localStorage.setItem(
"selectedPackage",
packageName
);

alert(
packageName +
" Package Selected"
);

}

/* ===========================
   VISITOR COUNTER
=========================== */

let count =

localStorage.getItem(
"visitorCount"
);

if(count == null){

count = 1;

}else{

count++;

}

localStorage.setItem(
"visitorCount",
count
);

console.log(
"Visitors : " + count
);

/* ===========================
   CURRENT YEAR FOOTER
=========================== */

const year =

new Date()
.getFullYear();

const footerYear =

document.getElementById(
"year"
);

if(footerYear){

footerYear.innerHTML =
year;

}

/* ===========================
   FUTURE MODULES

   Gallery API
   Admin Login
   JWT Auth
   Photo Download
   Razorpay
   QR Access

=========================== */

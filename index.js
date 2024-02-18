// SELECTEURS
// document.querySelector("h4").style.background = "yellow";
// const baliseHtml = document.querySelector("h4");

// Click Event
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "green";
});

btn2.addEventListener("click", () => {
  console.log("Click !");
  response.classList.add("show-response");
  response.style.background = "red";
});

// ---------------------------------------------
// Mouse Events
const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
  mousemove.style.border = "2px solid teal";
});

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0,0.6)";
});

questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "pink";
});

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg";
});

// ---------------------------------------------------
// KeyPress event
const keypresscontainer = document.querySelector(".keypress");
const key = document.getElementById("key");

const ring = (key) => {
  const audio = new Audio();
  audio.src = key + ".mp3";
  audio.play();
};

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;

  if (e.key === "j") {
    keypresscontainer.style.background = "pink";
  } else if (e.key === "h") {
    keypresscontainer.style.background = "teal";
  } else {
    keypresscontainer.style.background = "red";
  }
  if (e.key === "z") ring(e.key);
});

// ---------------------------------------------------
// Scroll Event
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);

  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});

// ---------------------------------------------------
// Form Events
const inputName = document.querySelector("input[type='text']");
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
  language = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (cgv.checked) {
    document.querySelector(
      "form > div"
    ).innerHtml = `<h3>Pseudo : ${pseudo}</h3>
    <h4>Language préféré : ${Language}</h4>`;
  } else {
    alert("Veuillez accepter les CGV");
  }
});

// ----------------------------------------------------
// Load Event
window.addEventListener("load", () => {
  console.log("Document chargé !");
});

// ----------------------------------------------------
// ForEach
const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    box.style.transform = "scale(0.7)";
  });
});

// ----------------------------------------------------
// addEventListener Vs onclick
// document.body.onclick = () => {
//   console.log("Click !");
// };

//  Bubbling
document.body.addEventListener("click", () => {
  console.log("Click 1 !");
});

// Usecapture
document.body.addEventListener(
  "click",
  () => {
    console.log("Click 2 !");
  },
  true
);

// https://gomakethings.com/what-is-that-third-argument-on-the-vanilla-js-addeventlistener-method-and-when-do-you-need-it/

// -----------------------------------------------
// Stop propagation
// questionContainer.addEventListener("click", (e) => {
//   alert("Test !");
//   e.stopPropagation();
// });

// removeEventListener

// -----------------------------------------------
// BOM

// console.log(window.innerHeight);
// console.log(window.scrollY);
// window.open("http://google.com", "cours js", "height=50, width=100");
// window.close();

// Evénements adossés à window
// alert("hello")

// confirm
btn2.addEventListener("click", () => {
  confirm("Voulez vous vaiment vous tromper ?");
});

// prompt
btn1.addEventListener("click", () => {
  let answer = prompt("Entrez votre nom !");

  questionContainer.innerHtml += "<h3>Bravo " + answer + "</h3>";
});

// Timer, compte à rebours
setTimeout(() => {
  questionContainer.style.borderRadius = "300px";
}, 2000);

// let interval = setInterval(() => {
//   document.body.innerHTML += `<div class="box"><h2>Nouvelle Boite !</h2></div>`;
// }, 4000);

// document.body.addEventListener("click", (e) => {
//   e.target.remove();
//   clearInterval(interval);
// });

// Location
// console.log(location.href);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.search);
// location.replace("http://lequipe.fr");

// window.onload = () => {
//   location.href = "http://twitter.fr";
// };

// Navigator
// console.log(navigator.userAgent);

// https://developer.mozilla.org/fr/docs/Web/API/Geolocation/getCurrentPosition

// var options = {
//   enableHighAccuracy: true,
//   timeout: 5000,
//   maximumAge: 0,
// };

// function success(pos) {
//   var crd = pos.coords;

//   console.log("Votre position actuelle est :");
//   console.log(`Latitude : ${crd.latitude}`);
//   console.log(`Longitude : ${crd.longitude}`);
//   console.log(`La précision est de ${crd.accuracy} mètres.`);
// }

// function error(err) {
//   console.warn(`ERREUR (${err.code}): ${err.message}`);
// }

// navigator.geolocation.getCurrentPosition(success, error, options);

// History
// console.log(history);
// window.history.back()
// history.go(-2);

// ---------------------------------------------
// SetProperty
window.addEventListener("mousemove", (e) => {
  nav.style.setProperty("--x", e.layerX + "px");
  nav.style.setProperty("--y", e.layerY + "px");
});

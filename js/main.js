///////////////////////////////////////////////////////////////////
///////// Select Dom Element

///////////////////////// Toggle Elements
const Toggle = document.querySelector("#toggle");
const navToggle_menu = document.querySelector(".navToggle_menu");
const overlay = document.querySelector(".overlay");
const btnToggle = document.querySelector(".btnToggle");
const links_toggle = document.querySelectorAll(".navToggle_menu a");

///////////////////////// Slice Elements
const slider = [...document.querySelectorAll(".slider_body")];
const arrowNext = document.querySelector("#next");
const arrowBefore = document.querySelector("#before");

/////////////////////////// Menu Desktop
const links = document.querySelectorAll(".nav ul li a");
const active = "active";

const nav = document.querySelector(".nav");

////////////////////////////////////////////////////////////////////
//////// Toggle menu Functionality

Toggle.addEventListener("click", (e) => {
  Toggle.classList.toggle("active");

  navToggle_menu.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
  // overlay.style.display = "block";
});

overlay.addEventListener("click", (e) => {
  navToggle_menu.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
  Toggle.classList.toggle("active");
});

//////////////* prueba

links_toggle.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const target = e.target.getAttribute("href"); // Obtiene el valor del atributo href
    const section = document.querySelector(target);
    section.scrollIntoView({ behavior: "smooth" });

    Toggle.classList.toggle("active");
    navToggle_menu.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
  });
});

////////////////////////////////////////////////////////////////////
////////  Menu Desktop Functionality

links.forEach((link, index) => {
  link.addEventListener("mouseover", (e) => {
    removeActiveClass();
    link.classList.add("active");
  });
});

function removeActiveClass() {
  links.forEach((link) => {
    link.classList.remove("active");
  });
}

nav.addEventListener("mouseout", () => {
  links.forEach((link, index) => {});
  removeActiveClass();
  links[0].classList.add("active");
});

////////////////////////////////////////////////////////////////////
//////// Slice Functionality

let value; // Variable utilizada para almacenar el valor actual del elemento

// Selecciona el elemento con el id "arrowNext" y agrega un evento click que llama a la función ChangePositions con el argumento 1
arrowNext.addEventListener("click", () => ChangePositions(1));

// Selecciona el elemento con el id "arrowBefore" y agrega un evento click que llama a la función ChangePositions con el argumento -1
arrowBefore.addEventListener("click", () => ChangePositions(-1));

// Función que cambia las posiciones de los elementos
function ChangePositions(change) {
  // Obtiene el elemento actual que tiene la clase "slider_body--show" y obtiene su atributo de datos "id"
  const currentElement = Number(
    document.querySelector(".slider_body--show").dataset.id
  );

  // Asigna el valor del elemento actual a la variable "value"
  value = currentElement;

  // Aumenta o disminuye el valor de "value" según el argumento "change"
  value += change;

  // Comprueba si "value" es igual a 0 o igual a la longitud del array "slider" más 1
  if (value === 0 || value == slider.length + 1) {
    // Si es igual a 0, asigna a "value" la longitud del array "slider"
    // Si es igual a la longitud del array "slider" más 1, asigna a "value" 1
    value = value === 0 ? slider.length : 1;
  }

  // Remueve la clase "slider_body--show" del elemento anteriormente mostrado
  slider[currentElement - 1].classList.toggle("slider_body--show");

  // Agrega la clase "slider_body--show" al nuevo elemento que se debe mostrar
  slider[value - 1].classList.toggle("slider_body--show");
}

////////////////////////////////////////////////////////////////////
//////// Repo
document.addEventListener("DOMContentLoaded", function () {
  var repoLinks = document.querySelectorAll("#repo-link");

  repoLinks.forEach(function (repoLink) {
    repoLink.addEventListener("click", function (event) {
      event.preventDefault();

      var username = "Anthonylaverde25";
      var repoName = "landing-page ";
      var apiUrl = `https://api.github.com/repos/${username}/${repoName}`;

      fetch(apiUrl)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          var repoURL = data.html_url;

          window.open(repoURL, "_blank");
        })
        .catch(function (error) {
          console.log(error);
        });
    });
  });
});

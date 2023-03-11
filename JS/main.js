/* TODO ESTO DE ACA ES PARA EL BOTON DE APARECER Y DESAPARECER EL NAVBAR */

//Create a button
const navbarContainer = document.getElementById("navbar");
//Button navBar
const buttonNavbar = document.createElement("div");
buttonNavbar.classList.add("toggle-btn");
//Span 
const tagNavbar = document.createElement("span");
tagNavbar.innerHTML = "&#9776";
//Put inside the button the span
buttonNavbar.appendChild(tagNavbar);
//Put the button inside the navBar
navbarContainer.appendChild(buttonNavbar);

//* Funcion de aparecer y desaparecer el navbar lateral
// sidebar toggle
buttonNavbar.addEventListener('click', function () {
  console.log('clik')
  document.getElementById('navbar').classList.toggle('active');
  console.log(document.getElementById('navbar'))
});


/* ESTO ES PA LOS UL AND LI */
const etiqueta_ul = document.createElement("ul");

const etiqueta_li1 = document.createElement("li");
etiqueta_li1.classList.add("li_1");

const etiqueta_li2 = document.createElement("li");
etiqueta_li2.classList.add("li_2");

const etiqueta_a1 = document.createElement("a");
etiqueta_a1.innerHTML = "Inicio";
const etiqueta_a2 = document.createElement("a");
etiqueta_a2.innerHTML = "Formulario";
//meto las "a" en los "li"
etiqueta_li1.appendChild(etiqueta_a1);
etiqueta_li2.appendChild(etiqueta_a2);
//meto las "li" en "ul"
etiqueta_ul.appendChild(etiqueta_li1);
etiqueta_ul.appendChild(etiqueta_li2);
//mandar a llamar todo en el navbar
navbarContainer.appendChild(etiqueta_ul);



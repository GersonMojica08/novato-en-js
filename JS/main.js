





//* Funcion de aparecer y desaparecer el navbar lateral
// sidebar toggle
const btnToggle = document.querySelector('.toggle-btn');

btnToggle.addEventListener('click', function () {
  console.log('clik')
  document.getElementById('navbar').classList.toggle('active');
  console.log(document.getElementById('navbar'))
});


//Create a button
const navbarContainer = document.getElementById("navbar");


//Button navBar
const buttonNavbar = document.createElement("div");
buttonNavbar.classList.add("toggle-btn");

//Span 
const tagNavbar = document.createElement("span");

//Put inside the button the span
buttonNavbar.appendChild(tagNavbar);

//Put the button inside the navBar
navbarContainer.appendChild(buttonNavbar);




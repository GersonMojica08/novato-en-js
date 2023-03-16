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


/* ESTO ES PA LOS ul AND li */
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

/*********************************************************************/
/* CREAMOS LOS Div PARA METER EL SALUDO */
const div_1 = document.createElement("div");
div_1.classList.add("div_1");
div_1.classList.add("esconder_elemento");
const div_2 = document.createElement("div");
div_2.classList.add("div_2");
div_2.innerText = "Hola, Bienvenido al Mundo Web";

const boton_eliminar_bienvenida = document.createElement("button");
boton_eliminar_bienvenida.classList.add("boton_eliminar_bienvenida");
boton_eliminar_bienvenida.innerText = "X";
div_2.appendChild(boton_eliminar_bienvenida);

/*********************************************************************/
/* CREACION DEL BOTON SALUDAR: acapite Inicio */
const greeatingButton = document.createElement("button");
greeatingButton.innerHTML = "Saludar"
greeatingButton.classList.add("greeting_button");
/* el boton se mete al body */
const body = document.getElementById("body");
/*********************************************************************/
body.appendChild(div_1);
div_1.appendChild(div_2);
/*********************************************************************/

body.appendChild(greeatingButton);
/* evento para mostrar la clase del boton activa, mostrarlo al html */
etiqueta_li1.addEventListener("click", function() {
  greeatingButton.classList.add("greeting_button_active");
})

/* Evento para mostrar el saludo en el html */
greeatingButton.addEventListener("click", function() {
  /* Mostrar el div_1 */
  div_1.classList.remove("esconder_elemento");
  // greating.classList.add("saludo_active");
})

/* CREACION DEL FORMULARIO: acapite Formulario */
const formulario_ = document.createElement("form");
formulario_.classList.add("formularioclass");

const inputName = document.createElement("input");
inputName.classList.add("inputnameclass");
inputName.placeholder = "Nombre";
inputName.name = "nombre";

const inputApellido = document.createElement("input");
inputApellido.classList.add("inputapellidoclass");
inputApellido.placeholder = "Apellido";

const inputcorreo = document.createElement("input");
inputcorreo.classList.add("inputcorreoclass");
inputcorreo.placeholder = "Correo";
inputcorreo.type ="email";

const boton_guardar = document.createElement("button");
boton_guardar.classList.add("boton_guardar");
boton_guardar.innerHTML = "Guardar";

/* meter los input en el form */
formulario_.appendChild(inputName);
formulario_.appendChild(inputApellido);
formulario_.appendChild(inputcorreo);
formulario_.appendChild(boton_guardar);/** modificacion */

/* evento para mostrar el formulario en el html al dar clic
en el acapite formulario*/
body.appendChild(formulario_);

etiqueta_li2.addEventListener("click", function() {
  formulario_.classList.add("formularioclass_active")
})

/*  Quitar lo que esta en li2 cuando das clic en li1 */
etiqueta_li1.addEventListener("click", function() {
  formulario_.classList.remove("formularioclass_active");
})

/*  Quitar lo que esta en li1 cuando das clic en li2 */
etiqueta_li2.addEventListener("click", function() {
  greeatingButton.classList.remove("greeting_button_active");
  div_1.classList.add("esconder_elemento");

})

/*********************************************************************/
etiqueta_li1.addEventListener("click", function() {
  div_1.classList.add("div_1");
})

 // borrar la bienvenida
boton_eliminar_bienvenida.addEventListener("click", function() {
  div_1.classList.add("esconder_elemento");
})

/*********************************************************************/
/*                 ACA SE LE DARA VIDA AL FORMULARIO                 */
/*********************************************************************/
var PRINCIPAL = []
boton_guardar.addEventListener("click", function(e) {
  e.preventDefault();
  const captura_data = formulario_.querySelectorAll("input");
  console.log("este un clic de prueva",captura_data);
  agregar_a_tabla(captura_data);
  
})


function actualizar_tabla(){
  let tbody = document.getElementById("datos");
  tbody.innerHTML = "";

  for(let i=0; i < PRINCIPAL.length; i++){
      let trt = "<tr ><td>"+ PRINCIPAL[i].nombre +"</td><td>"+ PRINCIPAL[i].apellido  +"</td><td>"+ PRINCIPAL[i].correo +"</td><td>"+ "<button onclick=eliminar('"+ i +"')>X</button>" +"</td></tr>"
       tbody.innerHTML+=trt;
   }
}

/*  */

function agregar_a_tabla(captura_data){
    //console.log(formulario);
    let linea = {
      nombre: captura_data[0].value,
      apellido: captura_data[1].value,
      correo: captura_data[2].value
    }
    PRINCIPAL.push(linea);
    actualizar_tabla();
    return false;
}

function eliminar(i){
  delete PRINCIPAL[i];
  actualizar_tabla();
}

/*esto es para esconder y aparecer la tabla*/
const tabla_data = document.getElementById("tabla");
tabla_data.classList.add("esconder_elemento")

etiqueta_li1.addEventListener("click", function() {
  tabla_data.classList.add("esconder_elemento");
})

etiqueta_li2.addEventListener("click", function() {
  tabla_data.classList.remove("esconder_elemento");
})








//* Funcion de aparecer y desaparecer el navbar lateral
// sidebar toggle
const btnToggle = document.querySelector('.toggle-btn');

btnToggle.addEventListener('click', function () {
  console.log('clik')
  document.getElementById('navbar').classList.toggle('active');
  console.log(document.getElementById('navbar'))
});

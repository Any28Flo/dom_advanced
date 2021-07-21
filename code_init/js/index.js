let $cart = document.querySelector('#cart tbody');
let $calc = document.getElementById('calc');
//Aqui traemos el precio
let $price = document.querySelector('.pu').querySelector('span').textContent;
//Aqui traemos el input de cantidad
let $quanty = document.querySelector('.qty').querySelector('input');
//Aqui el input de sub total
let $subtotl = document.querySelector('.subtot').querySelector('span');

//Aqui el input del total

$calc.onclick = calcAll;

//Aqui estan las variables del DOM
let $quanty2 = Array.from(document.querySelectorAll('.qty'));
let $delete = Array.from(document.getElementsByClassName('btn-delete'));

//Aqui se asignan los eventos
$quanty2.forEach(el => el.querySelector('input').addEventListener('click',updateSubtot));
$delete.forEach(el => el.addEventListener('click', deleteEl));




function updateSubtot(e) {
  e.target.parentElement.parentElement.nextSibling.nextSibling.querySelector('span').textContent = Number(e.target.parentElement.parentElement.previousSibling.previousSibling.querySelector('span').textContent) * e.target.value;
}

function calcAll() {
  //Variable temporal para hacer la cuenta de los $subtotl2
  let cuenta = 0;

  let $subtotl2 = Array.from(document.querySelectorAll('.subtot'));
  let $total = document.querySelector('h2').querySelector('span');
  $subtotl2.forEach(el => cuenta += Number(el.querySelector('span').textContent));
  $total.innerHTML = cuenta;
}

function deleteEl(e) {
  let grndParent = e.target.parentElement.parentElement.parentElement;
  grndParent.removeChild(e.target.parentElement.parentElement);
  //Esto se le agrega para que cuando borre el elemento tambien actualice el total
  calcAll();
}



let $cart = document.querySelector('#cart tbody');
let $calc = document.getElementById('calc');
//Aqui traemos el precio
let $price = document.querySelector('.pu').querySelector('span').textContent;
//Aqui traemos el input de cantidad
let $quanty = document.querySelector('.qty').querySelector('input');
//Aqui el input de sub total
let $subtotl = document.querySelector('.subtot').querySelector('span');

//Aqui el input del total
let $total = document.querySelector('h2').querySelector('span');


//Esta variable recoge el valor de quantity en cada click dado con el evento de debajo

 
/* $quanty.addEventListener('click',updateSubtot);
/* 
function updateSubtot(e) {
  $subtotl.innerHTML = Number($price) * e.target.value;
} */ 

/* function calcAll() {
  $total.innerHTML = $subtotl.textContent;
} */

$calc.onclick = calcAll2;

let $price2 = document.querySelectorAll('.pu');
let $quanty2 = Array.from(document.querySelectorAll('.qty'));
let $subtotl2 = Array.from(document.querySelectorAll('.subtot'));

$quanty2.forEach(el => el.querySelector('input').addEventListener('click',updateSubtot2));


function updateSubtot2(e) {
  /* $subtotl2.forEach((el, ind) => el.querySelector('span').innerHTML = Number($price2[ind].querySelector('span').textContent) * e.target.value) ; */
  e.target.parentElement.parentElement.nextSibling.nextSibling.querySelector('span').textContent = Number(e.target.parentElement.parentElement.previousSibling.previousSibling.querySelector('span').textContent) * e.target.value;
}

function calcAll2() {
  let cuenta = 0;
  $subtotl2.forEach(el => cuenta += Number(el.querySelector('span').textContent));
  $total.innerHTML = cuenta;
}



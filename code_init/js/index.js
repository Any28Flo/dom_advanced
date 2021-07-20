let $cart = document.querySelector('#cart tbody');
let $calc = document.getElementById('calc');
let $price = document.querySelector('.pu').querySelector('span').textContent;
let $subtotl = document.querySelector('.subtot').querySelector('span');
let $quanty = document.querySelector('.qty').querySelector('input');
console.log($quanty);
let $total = document.querySelector('h2').querySelector('span');
console.log($total);

//Esta variable recoge el valor de quantity en cada click dado con el evento de debajo
let cantidad = 0; 
$quanty.addEventListener('click',updateSubtot);

function updateSubtot(e) {
  $subtotl.innerHTML = Number($price) * e.target.value;
}

function calcAll() {
  $total.innerHTML = $subtotl.textContent;
}

$calc.onclick = calcAll;


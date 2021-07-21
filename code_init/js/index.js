let $cart = document.querySelector('#cart tbody');
let $calc = document.getElementById('calc');


function updateSubtot($product) {
  // Iteration 1.1
  let quatity=$product.querySelector('.qty input');
  let priceUnit=$product.querySelector('.pu span');
  let subTotal =$product.querySelector('.subtot span');
  let resultado=parseInt(quatity.value)*parseFloat(priceUnit.textContent);
  subTotal.innerHTML =resultado;
  return resultado;
}

function calcAll() {
  // Iteration 1.2
  updateSubtot($cart);
}

$calc.onclick = calcAll;
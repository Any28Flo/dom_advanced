let $cart = document.querySelector('#cart tbody');
let $calc = document.getElementById('calc');


function updateSubtot($product) {
  // Iteration 1.1
  let quatity=$product.querySelector('.qty input');
  let priceUnit=$product.querySelector('.pu span');
  let subTotal =$product.querySelector('.subtot span');
  console.log(priceUnit.textContent);
  console.log(quatity.value);
  console.log(subTotal.textContent);
  let resultado=parseInt(quatity.value)*parseFloat(priceUnit.textContent);
  console.log(resultado);

  subTotal.innerHTML =resultado;
  return resultado;
}

function calcAll() {
  // Iteration 1.2
  let total=0;
  let calcTotal=document.querySelector('h2 span');
  console.log(calcTotal.textContent);
  let products=$cart.getElementsByClassName('product');
  for(let i=0;i<products.length;i++){
    total=total+updateSubtot(products[i]);
  }
  console.log(total);
  calcTotal.innerHTML=total;
}

$calc.onclick = calcAll;
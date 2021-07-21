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
  let products=$cart.getElementsByClassName('product');
  console.log(products);
  for(let i=0;i<products.length;i++){
    products[i]=updateSubtot(products[i]);
  }
  
}

$calc.onclick = calcAll;
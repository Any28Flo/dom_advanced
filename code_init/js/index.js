let $cart = document.querySelector('#cart tbody');
let $calc = document.getElementById('calc');
// let $table = document.querySelectorAll('.product')
// $table => NodeList(2) [tr.product, tr.product]

function updateSubtot($product) {
  // Iteration 1.1
  // let priceUnit = $product.querySelector('.pu span') //=>span
  // let qty = $product.querySelector('.qty input') //=>input
  // let sub_total = $product.querySelector('.subtot span')
  let priceUnit = document.querySelector('.pu span') //=>span
  let qty = document.querySelector('.qty input') //=>input
  let sub_total = document.querySelector('.subtot span')
  priceUnit = parseFloat(priceUnit.innerHTML)
  // qty = parseFloat(qty.value) //=> 0 typeof qty => number
  sub_total.innerText = priceUnit*parseFloat(qty.value)
  // qty.addEventListener('input')
}

function calcAll() {
  // Iteration 1.2
  updateSubtot($cart)
  // for (product of $table){
  //   updateSubtot(product)
  //   console.log(product)
  // }
  // for( let i = 0; i<$table.length; i++ ){
  //   console.log($table[i])
  //   updateSubtot($table[i])
  // }
}

$calc.onclick = calcAll;
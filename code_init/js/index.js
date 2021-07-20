let $cart = document.querySelector('#cart tbody');
let $calc = document.getElementById('calc');
let $table = document.querySelectorAll('.product')
// $table => NodeList(2) [tr.product, tr.product]

function updateSubtot($product) {
  // Iteration 1.1
  let priceUnit = $product.querySelector('.pu span') //=>span
  let qty = $product.querySelector('.qty input') //=>input
  let sub_total = $product.querySelector('.subtot span')
  priceUnit = parseFloat(priceUnit.innerHTML)
  // qty = parseFloat(qty.value) //=> 0 typeof qty => number
  sub_total.innerText = priceUnit*parseFloat(qty.value)
  // qty.addEventListener('input')
  return parseFloat(sub_total.innerText)
}

function updateTotal( total ){
  let h2Total = document.querySelector('h2 span') // => <span>0</span>
  // console.log(h2Total.innerText)// => 0
  h2Total.innerText = total
}

function calcAll() {
  // Iteration 1.2
  // updateSubtot($cart)
  let sum = 0
  for (product of $table){
    sum +=  updateSubtot(product)
   
    //console.log(product) //<tr class="product">...</tr>
  }
  // console.log(sum)
  updateTotal(sum)
  // for( let i = 0; i<$table.length; i++ ){
  //   console.log($table[i])
  //   updateSubtot($table[i])
  // }
}

$calc.onclick = calcAll;
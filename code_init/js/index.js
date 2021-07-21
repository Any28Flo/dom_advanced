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



//console.log(products[1]);

//let parent1=document.querySelector('#cart tbody');
let $buttonCrear=document.getElementById('create');

function crear (){
  let parent1=document.querySelector('#cart tbody');
  let nombreProducto=document.querySelectorAll('.new td');
  let nombreP=nombreProducto[0];
  let precioP=nombreProducto[1];
  let nombreCreate=nombreP.querySelector('input');
  let PrecioCreate=precioP.querySelector('input');
  let nombreNuevo=nombreCreate.value;
  let precioNuevo=PrecioCreate.value;

  /*
  let productTag=document.createElement(`<tr class="product"><td class="name"><span>${nombreNuevo}</span></td><td class="pu">$<span>${precioNuevo}</span></td><td class="qty"><label><input type="number" value="0" min="0"></label></td><td class="subtot">$<span>0</span></td><td class="rm"><button class="btn btn-delete">Delete</button></td></tr>`);
  */
  //let text=document.createTextNode()
  parent1.innerHTML+=`<tr class="product"><td class="name"><span>${nombreNuevo}</span></td><td class="pu">$<span>${precioNuevo}</span></td><td class="qty"><label><input type="number" value="0" min="0"></label></td><td class="subtot">$<span>0</span></td><td class="rm"><button class="btn btn-delete">Delete</button></td></tr>`;

}


$buttonCrear.onclick = crear;

/*
let totalBotones=document.querySelectorAll('.rm button');
console.log(totalBotones);
*/


let $buttonsDelet=$cart.getElementsByClassName("btn btn-delete");

//console.log(buttonsDelet);
//console.log(products);

for(let j=0;j<$buttonsDelet.length;j++){
    $buttonsDelet[j].onclick=function(){
      let products=document.getElementsByClassName('product');
      let parent=document.querySelector('#cart tbody');
      //console.log(products[j]);
      alert("¡ Se borrara tu producto !");
      let elemento_removido=parent.removeChild(products[j]);
      //console.log(products[j]);
      console.log(elemento_removido);
  }
}
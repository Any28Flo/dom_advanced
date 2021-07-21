let $cart = document.querySelector('#cart tbody');
let $calc = document.getElementById('calc');
let $del1 = document.getElementsByClassName("btn btn-delete")[0];
let $del2 = document.getElementsByClassName("btn btn-delete")[1];
let $btn = document.getElementById("#create");

function updateSubtot($product) {
  // Iteration 1.1 
  let precio_bubblehead = Number(document.getElementsByClassName("pu")[0].querySelector("span").textContent);
  let precio_shirt = Number(document.getElementsByClassName("pu")[1].querySelector("span").textContent);
  let cantidad_input1 = Number(document.getElementsByClassName("qty")[0].querySelector("input").value);
  let cantidad_input2 = Number(document.getElementsByClassName("qty")[1].querySelector("input").value);  
  let resultado1 = precio_bubblehead * cantidad_input1;
  let resultado2 = precio_shirt * cantidad_input2;
  document.getElementsByClassName("subtot")[0].querySelector("span").textContent = resultado1;
  document.getElementsByClassName("subtot")[1].querySelector("span").textContent = resultado2;
  let resultado_final = resultado1 + resultado2;
  return resultado_final;
}

function calcAll() {
  // Iteration 1.2
  document.querySelector("h2").querySelector("span").textContent = updateSubtot();
}
$calc.onclick = calcAll;

function deleteProd1() {
  $cart.removeChild($cart.childNodes[0]);
}

function deleteProd2() {
  $cart.removeChild($cart.childNodes[1]);
}

$del1.onclick = deleteProd1;
$del2.onclick = deleteProd2;
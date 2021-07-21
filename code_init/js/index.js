//Se obtiene el nodo del id cart en el cuerpo de la tabla
let $cart = document.querySelector('#cart tbody');
//Se obtiene el elemento con id calc, que es un boton
let $calc = document.getElementById('calc');

//Función donde se actualiza el subtotal
function updateSubtot($product) {
  // Iteration 1.1
  //Se obtiene la etiqueta span de la clase .pu
  let precioUnitario=$product.querySelector(".pu span");
  //Prueba 
  console.log(precioUnitario);
  //Se obtiene la etiqueta input de la clase .qty
  let cantidad=$product.querySelector(".qty input");
  //Se obtiene la etiqueta span de la clase subtot
  let subTotal=$product.querySelector(".subtot span");
  //Se obtiene la etiqueta span de la clase name
  let nombreProducto=$product.querySelector(".name span");
  //Variable para almacenar el resultado
  let resultado=0;
  //Se valida si los datos son validos, si son validos se cambia el texto de subtotal
  if(validadato(cantidad,nombreProducto)){
    //Se realiza la multiplicación
    resultado=parseFloat(cantidad.value)*parseFloat(precioUnitario.textContent);
    //A la etiqueta span de subtot se le cambia el texto
    subTotal.innerText=resultado;
  }
}
//Se valida que el dato es valido 
function validadato(cantidad,nombreProducto){
  //Si el valor de cantidad tiene una e o  no esta entre 0 y 999 se manda un mensaje
  if(parseInt(cantidad.value)<0 || cantidad.value.length===0||parseInt(cantidad.value)>=1000||cantidad.value.includes('e')){
    //Manda un alert, debido a que ese dato no es valido
    alert(`El valor de ${nombreProducto.textContent} no es valido, debe estar entre 0 y 999.Como no es valido, se considerara como cero. Si deseas cambiarlo introduce un valor valido y aprieta de nuevo el boton`)
    return false;
  }
  return true;
}
function calcAll() {
  // Iteration 1.2
  //Se manda a llamar la función updateSubtot
  updateSubtot($cart);  
}
//Se maneja un eventeto de onclick si se presiona el boton se manda a llamar a la función calcAll
$calc.onclick = calcAll;


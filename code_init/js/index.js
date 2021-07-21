//Se obtiene el nodo del id cart en el cuerpo de la tabla
let $cart = document.querySelector('#cart tbody');
//Se obtiene el elemento con id calc, que es un boton
let $calc = document.getElementById('calc');
//Función donde se actualiza los subtotales
function updateSubtot($product) {
  // Iteration 1.1
  //En esta ocasión se seleccionan todas las etiquetas span de la clase pu
  let precioUnitario=$product.querySelectorAll(".pu span");
  //console.log(precioUnitario);
  //Se seleccionan todas las etiquetas input de la clase qty
  let cantidad=$product.querySelectorAll(".qty input");
  //Se seleccionan todas las etiquetas span de la clase sub
  let subTotal=$product.querySelectorAll(".subtot span");
  //Se seleccionan todas las etiquetas span de la clase name
  let nombreProducto=$product.querySelectorAll(".name span");
  //Variable para almacenar el resultado
  let resultado=0
  //Se realiza un ciclo para recorrer todos los elementos que se obtuvo del querySelectorALL
  for(let i=0;i<cantidad.length;i++){
      //Se valida si los datos son validos, si son validos se cambia el texto de subtotal
    if(validadato(cantidad[i],nombreProducto[i])){
      //Se realiza la multiplicación, cambiando los sting a floar
      resultado=parseFloat(cantidad[i].value)*parseFloat(precioUnitario[i].textContent);
      //A la etiqueta span de subtot se le cambia el texto
      subTotal[i].innerText=resultado;
    }
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
  arreglo=updateSubtot($cart);

}
//Se maneja un eventeto de onclick si se presiona el boton se manda a llamar a la función calcAll
$calc.onclick = calcAll;


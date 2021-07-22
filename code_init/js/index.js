//Se obtiene el nodo del id cart en el cuerpo de la tabla
let $cart = document.querySelector('#cart tbody');
//Se obtiene el elemento con id calc, que es un boton
let $calc = document.getElementById('calc');
//Trae todos los botones de eliminar mediante querySelectorAll
let $borrar = document.querySelectorAll(".btn-delete");
//
let $enviar = document.querySelector("tfoot .new #create");
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
  //Variable para almacenar el resultado, en este caso será un arreglo para almacenar 
  //los valores calculados y usarlos posteriormente
  let resultado=[];
  //Esta variable servira, para cuando un dato no sea valido y se pueda realizar la suma de 
  //todas formas, pero sin sumar ese valor en el total.
  let contadoraAux=0;
  //Se realiza un ciclo para recorrer todos los elementos que se obtuvo del querySelectorALL
  for(let i=0;i<cantidad.length;i++){
      //Se valida si los datos son validos, si son validos se cambia el texto de subtotal
    if(validadato(cantidad[i],nombreProducto[i])){
      //Se realiza la multiplicación, cambiando los sting a floar
      //Se almacena en resultado[contadorAux], debido a que algunos valores si no pasan la validación
      //No se suman
      resultado[contadoraAux]=parseFloat(cantidad[i].value)*parseFloat(precioUnitario[i].textContent);
      //A la etiqueta span de subtot se le cambia el texto
      subTotal[i].innerText=resultado[contadoraAux];
      contadoraAux++;
    }
  }
  //Regresa el arreglo
  return resultado;
  
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
//Función para calcular el total, que se activa con un click
function calcAll() {
  // Iteration 1.2
  let sumaTotal=0;
  //Se manda a llamar la función updateSubtot y regresa un arreglo de los subtotales
  arreglo=updateSubtot($cart);
  //Si el arreglo esta vacio, no hay ningún valor valido en cuenta, por ende no se cambia el total
  if(arreglo.length==0){
    return;
  }
  //Se obtiene el elemento con el id total 
  let total=document.getElementById("total");
  //Este for, es para sumar los subtotales
  for(let i=0;i<arreglo.length;i++){
    sumaTotal+=arreglo[i];
    
  }
  //Se cambia el texto, de la etiqueta span con id total, por el valor de la sumaTotal
  total.innerText=sumaTotal;

}
//Se maneja un eventeto de onclick si se presiona el boton se manda a llamar a la función calcAll
$calc.onclick = calcAll;
function deleteRow(e){
  //Con e.currentTarget se obtiene el elemento actual
  //donde ocurrio el evento, en otras palabras
  //el boton que presionamos, se le saca su nodo padre
  //y a ese nodo también se le saca su nodo padre
  //para obtener el renglon que se va a eliminar
  let renglon=e.currentTarget.parentNode.parentNode;
  //Se selecciona al tbody
  let cuerpo=document.querySelector("tbody");
  //tbody es padre de los trow y debido a que se obtuvo
  //antes el renglon a eliminar, lo unico que se tiene que 
  //realizar ahora es remover el hijo del padre cuerpo, utilizanod
  //el nodo de ese hijo.
  cuerpo.removeChild(renglon);
}
//borra contiene todos los botones delete
//Entonces se debe de hacer un foreach para cada boton delete,
//correspondiente a su renglon


//Obtiene la información del ultimo renglon y 
//crea un nuevo renglon con está iformación
//con los mismos campos que los otros dos renglones
//declarados en el html, además de sus funcionalidades
//como calcular su subtotal o eliminar el renglon
function enviarProducto(e){
  //Se obtiene el nodo de la etiqueta tr con clase .new
  let renglon=document.querySelector(".new");
  //Se obtiene la etiqueta span con el id=nombre-producto
  let nombreProducto=renglon.querySelector("#nombre-producto input");
  console.log(nombreProducto);
  //Se obtiene la etiqueta input con id precio
  let precio=renglon.querySelector("#precio input");
    //Se obtiene la etiqueta de tbody con el id cart
  let $cart = document.querySelector('#cart tbody');
  //Se compara para ver que los campos no sean vacios o el precio negativo
  if(parseFloat(precio.value)>0&&nombreProducto.value.length>0){
    //Se crea una etiquet tr
    let nuevoRenglon=document.createElement("tr");
    //A esa etiqueta tr, se le asigna a su código html
    //el siguiente texto encerrado en las backticks
    //donde se crea el renglon con todos los valores que
    //tiene cada renglon en el html
    nuevoRenglon.innerHTML=
    `<tr class="product">
    <td class="name">
      <span>${nombreProducto.value}</span>
    </td>

    <td class="pu">
      $<span>${parseFloat(precio.value).toFixed(2)}</span>
    </td>

    <td class="qty">
      <label>
        <input type="number" value="0" min="0">
      </label>
    </td>

    <td class="subtot" >
      $<span>0</span>
    </td>

    <td class="rm">
      <button class="btn btn-delete">Delete</button>
    </td>
  </tr>
  `;
  //Se añade al tbody este nuevo renglon
    $cart.appendChild(nuevoRenglon);
    //Se agarran todos los botones delete
    let $borrar = document.querySelectorAll(".btn-delete");
    //Como se creo un nuevo renglon, se debe asignar a su boton delete
    //su correspondiente evento, para borrar ese renglon    
    $borrar[$borrar.length-1].addEventListener('click',deleteRow);
    //Una vez insertado el dato, ponemos de nuevo en vacio 
    //los campos de llenado del ultimo renglon
    nombreProducto.value="";
    precio.value="";
  }
}

$borrar.forEach(element => {
  //Se le agrega el evento listener a element, que corresponde 
  //a uno de los botones eliminar
  element.addEventListener("click",deleteRow)
});
console.log($enviar);
//Se añade el evento al boton de create para enviar
//el nuevo producto con la funcion enviarProducto
$enviar.addEventListener("click",enviarProducto)

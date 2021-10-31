function actualizaSubtotal(producto){
    const priceUnit = producto.querySelector('.pu span').textContent;
    const quantity = producto.querySelector('.qty input').value;

    let subTotal = parseFloat(priceUnit) * parseFloat(quantity);

    const txt_sub = producto.querySelector('.subtot span');
    txt_sub.innerHTML = subTotal;

    return subTotal;

} //ActualizaSubtotal

function calculaTotal(){
    // const products = document.getElementsByClassName('product');
    const products = document.querySelectorAll('.product');
    
    let sumSubs = 0;

    for (let index = 0; index < products.length; index++) {
        const producto = products[index];
       sumSubs += actualizaSubtotal(producto);
    }

    const total = document.querySelector('#total-value span');
    total.innerHTML = parseFloat(sumSubs);

} //CalculaTotal


function crearProducto(){
    const newProduct = document.querySelector('.new');
    const name = newProduct.querySelector('#newName').value;
    const pu = parseFloat(newProduct.querySelector('#newPu').value);

    console.dir(newProduct.querySelector('#newName'));

    const ancla = document.querySelector('#cart tbody');
    const temp = document.createElement('tr');
    temp.classList.add('product');

    temp.innerHTML += `
                <td class="name">
                    <span>${name.toUpperCase()}</span>
                </td>
        
                <td class="pu">
                    $<span>${pu}</span>
                </td>
        
                <td class="qty">
                    <label>
                        <input type="number" value="0" min="0">
                    </label>
                </td>
        
                <td class="subtot">
                    $<span>0</span>
                </td>
        
                <td class="rm">
                    <button class="btn btn-delete">Delete</button>
                </td>`


    ancla.appendChild(temp);
    actualizarBotones();

}//Crear producto

function actualizarBotones(){
    
//____botones Delete__________________________________________
const btnsDelete = document.querySelectorAll('.btn-delete');

btnsDelete.forEach( function(button){
    button.addEventListener('click',function(e){
        const target = e.currentTarget
        target.parentNode.parentNode.remove();
    });
}); //btnsDelete
//____________________________________________________________

}


actualizarBotones();

//____boton Calcular________________________________
const btnCalc = document.getElementById('calc');

btnCalc.addEventListener('click',function(){
    calculaTotal();
}); //btnCalculatePrices
//___________________________________________________


//_____Boton Crear____________________________________________
const btnCreate = document.getElementById('create');

btnCreate.addEventListener('click',function(){
    crearProducto(); 
});
//____________________________________________________________
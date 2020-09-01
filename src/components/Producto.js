import React from 'react';

const  Producto = ({producto , carrito , agregarProducto , productos}) => {

    const {nombre , precio , id} = producto;

    // Agregar producto al carrito
    const seleccionarProducto = (id) => {
        let producto = productos.filter(producto => producto.id === id)[0];
        agregarProducto([
            ...carrito , producto
        ])
    }

    // Eliminando productos del Carrito
    const eliminarProducto = (id) => {
        let producto = carrito.filter( producto => producto.id !== id);
        agregarProducto (producto)
    }

    return (
       <div>
           <h2> {nombre} </h2>
            <p>${precio}</p>
            
            { productos 
                ?
                    <button
                        type = "button"
                        onClick = { () => seleccionarProducto(id) }
                    >Comprar</button>
                :
                    <button
                        type = "button"
                        onClick = { () => eliminarProducto(id) }
                    >Eliminar</button>
                }
       </div> 
                 );
}
 
export default Producto ;
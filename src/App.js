import React,{Fragment , useState} from 'react';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.js";
import Producto from "./components/Producto.js";
import Carrito from "./components/Carrito.js";


function App() {
  // Crear listado de productos
  const [productos , guardarProductos] = useState([
    {id:1 , nombre: "camisa ReactJs" , precio: 50},
    {id:2 , nombre: "camisa VueJs" , precio: 40},
    {id:3 , nombre: "camisa NodeJs" , precio: 30},
    {id:4 , nombre: "camisa Angular" , precio: 20},
  ]);

  // State para carrito de compras
  const [ carrito , agregarProducto] = useState([])


  const fecha = new Date().getFullYear();

  return (
    <Fragment>
        <Header titulo="Hola ReactJs" /> 

        <h1>Listado de Productos</h1>
        {productos.map(producto => (
         <Producto 
            key = {producto.id}
            producto = {producto}
            productos = {productos}
            carrito = {carrito}
            agregarProducto = {agregarProducto}
         />
        ))}

        <Carrito 
          carrito = {carrito}
          agregarProducto = {agregarProducto}
        />


        <Footer fecha={fecha}/>
    </Fragment>
  );
}

export default App;

import { useState } from "react"
import Contacto from "./components/Contacto"
import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import Navbar from "./components/NavBar/Navbar"
import Nosotros from "./components/Pages/Nosotros"
import { CartContext } from "./context/CartContext"
import "./helpers/main.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Carrito from "./components/NavBar/Carrito"


function App() {

  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (item, cantidad) => {
    const itemAgregado = {...item, cantidad};

    const nuevoCarrito = [...carrito];
    const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id);

    if (estaEnElCarrito) {
        estaEnElCarrito.cantidad += cantidad;
    } else {
        nuevoCarrito.push(itemAgregado); 
    }
    setCarrito(nuevoCarrito);   
}

const cantidadEnCarrito = () => {
  return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
}

const precioTotal = () => {
  return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
}
  

  return (
    <div>
      <CartContext.Provider value={ {carrito, agregarAlCarrito, cantidadEnCarrito, precioTotal} }>
      <BrowserRouter>

        <Navbar/>

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} /> 
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/productos/:categoria" element={<ItemListContainer />} />
          <Route path="/nosotros" element={<Nosotros />} /> 
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/carrito" element={<Carrito />} />

        </Routes>

      </BrowserRouter>
      </CartContext.Provider>
    </div>
  )
}

export default App

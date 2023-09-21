import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import Navbar from "./components/NavBar/Navbar"
import Nosotros from "./components/Pages/Nosotros"
import "./helpers/main.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"


function App() {
  

  return (
    <div>
      <BrowserRouter>

        <Navbar/>

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} /> 
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/productos/:categoria" element={<ItemListContainer />} />
          <Route path="/nosotros" element={<Nosotros />} /> 

        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- # Tienda Streetwear en React


## Components

- **Navbar**: La barra de navegación en la parte superior de la página.
- **ItemList**: Lista de productos para mostrar en la página principal.
- **ItemDetail**: Página de detalles de un producto específico.
- **Contacto**: Página con formulario para que cliente diligencie.
- **Cart**: Página del carrito de compras.
- **ItemCount**: Opción de agregar o quitar items de productos.
- **Checkout**: Página de pago y finalización de la compra.

## Rutas

1. `/`: Página de inicio que muestra la lista de productos.
2. `/producto/:categoria`: Página de detalles de un producto específico.
3. `/carrito`: Página del carrito de compras.
4. `/checkout`: Página de pago.
5. `/nosotros`: Página que cuenta sobre el ecommerce.
6. `/contacto`: Página para que el cliente doligencie formulario de datos.


##  Uso

```jsx
import React from 'react';

function App() {
  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="logo"><h1>StreetWear</h1></Link>
        <ul className="menu">
            <li><Link className="menu-link"to="/">Inicio</Link></li>
            <li><Link className="menu-link"to="/productos">Productos</Link></li>
            <li><Link className="menu-link"to="/productos/joggers">Joggers</Link></li>
            <li><Link className="menu-link"to="/productos/oversizes">Oversizes</Link></li>
            <li><Link className="menu-link"to="/productos/hoodies">Hoodies</Link></li>
            <li><Link className="menu-link"to="/productos/tops">Tops</Link></li>
            <li><Link className="menu-link"to="/nosotros">Nosotros</Link></li>
            <li><Link className="menu-link"to="/contacto">Contacto</Link></li>
            <li><CartWidget /></li>
        </ul>

        

    </nav>
    </div>
  );
}

export default App;


Estilos
Se aplicaron estilos CSS y tambien bibliotecas de diseño como Bootstrap y React icon.

Lógica de Negocio
Conectar a una base de datos con firebase de Google para obtener información de productos.
Agregar productos al carrito y realizar cálculos de precios.
Procesar pagos en la página de pago.

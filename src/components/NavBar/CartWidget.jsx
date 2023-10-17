import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { AiOutlineShoppingCart } from "react-icons/ai"


const CartWidget = () => {

    const { cantidadEnCarrito } = useContext(CartContext);
    return (
        <div>
            <Link className="menu-link"to="/carrito">
                <AiOutlineShoppingCart />
                <span className="numerito">{cantidadEnCarrito()}</span>
            </Link>

        </div>
    )
}


export default CartWidget
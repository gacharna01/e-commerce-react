import React, { useEffect } from 'react'

const Nosotros = () => {

  useEffect(() => {

    const clickear = () => {
      console.log("click");
    }

      window.addEventListener("click", clickear)
        
      return () => {
        window.removeEventListener("click", clickear)
      }

  }, [])

  return (
    <div className="container">
        <h1 className="main-title">Nosotros</h1>
        <p>Somos una tienda de streetwear apasionada por la cultura urbana y la moda de vanguardia. En nuestro eCommerce, ofrecemos una cuidadosa selección de prendas y accesorios que reflejan la esencia de la calle, fusionando estilo, comodidad y autenticidad. Nuestra misión es proporcionar a nuestros clientes piezas únicas que les permitan expresar su individualidad y destacar en cualquier entorno. Con un compromiso inquebrantable con la calidad y la innovación, estamos aquí para vestirte con lo último en tendencias urbanas y ayudarte a hacer una declaración audaz en cada paso que des. ¡Bienvenido a nuestra comunidad de moda streetwear!</p>
    </div>
  )
}

export default Nosotros
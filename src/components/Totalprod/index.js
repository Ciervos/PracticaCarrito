import React from 'react'

function Totalprod(props) {
  const {lista} = props;
 

  return <p>Total de productos en carrito: {lista.length} </p>
}

export default Totalprod;
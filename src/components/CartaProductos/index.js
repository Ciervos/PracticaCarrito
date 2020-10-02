import React from 'react'

function CartaProductos(props) {
  const {name,img} = props.data;


  return <>
<img name={name} src={img} onClick={props.cb} height={name=="Alfajor Oreo"? "400px":"200px"} width={name=="Alfajor Oreo"? "400px":"200px"}/>
  </>
}

export default CartaProductos;
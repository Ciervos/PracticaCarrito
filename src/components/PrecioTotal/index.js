import React,{useState} from 'react'

function PrecioTotal(props) {
    const {valor} = props;

return (

<p>Precio total: ${valor}</p>)
}

export default PrecioTotal;
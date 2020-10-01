import React,{useContext} from 'react';
import ProductsContext from "../../contexts/ProductsContext";
import CartaProductos from '../CartaProductos';
import './style.scss';

function CartaCont() {
  const data = useContext(ProductsContext);

  function handleClick(info){
    data.carrito.push(info.target.name)
    console.log(data.carrito)

  }

  return <div id="cartacont">
   
    {data.productos.map((prod, key) => {
        return (
          <CartaProductos data={prod} key={key} cb={handleClick}/>
        );
      })}


  </div>
}

export default CartaCont;
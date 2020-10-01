import React,{useState,useEffect,useContext} from 'react'
import ProductsContext from "../../contexts/ProductsContext";
import PrecioTotal from '../PrecioTotal'
import Totalprod from '../Totalprod'
import Product from '../Product'
import './style.scss'

function Carro() {
  const data = useContext(ProductsContext);
  const [carrito,setCarrito] = useState([]);

  useEffect(() => {
    setCarrito(data.carrito)
    console.log(carrito)
  },[data.carrito]);

  return <div className="carrocont"><div className="carrorecuadros"><p>Lista de productos en carrito</p>
  
  {carrito.map((prod, key) => {
        return (
          <Product data={prod} key={key}/>
        );
      })}
  </div>
  
  <div className="carrorecuadros"><Totalprod/><PrecioTotal/></div></div>
}

export default Carro;
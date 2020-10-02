import React,{useState,useEffect} from 'react'
import PrecioTotal from '../PrecioTotal'
import Totalprod from '../Totalprod'
import Product from '../Product'
import './style.scss'

function Carro(props) {
  const {lista} = props;
  const [valor,setValor] = useState(0);

  useEffect(() => {
    if(lista.length>=1){ 
      setValor(valor+lista[lista.length-1][0].price)}

      
  },[lista]);

  return( 
  
  <div className="carrocont"><div className="carrorecuadros"><p>Lista de productos en carrito</p>
  
  {lista.map((prod, key) => {
          return (
          <Product data={prod} key={key}/>
        );
      })}
  </div>
  
  <div className="carrorecuadros"><Totalprod lista={lista}/><PrecioTotal valor={valor}/></div></div>
  )}

export default Carro;
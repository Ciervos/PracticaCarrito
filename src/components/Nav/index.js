import React,{useContext} from 'react';
import ProductsContext from "../../contexts/ProductsContext";
import './style.scss'

function Nav() {
  const data = useContext(ProductsContext);
  return <div id="barranav"><h1>Loguito</h1>
  <button onClick={data.handleMostrar}>Carrito</button>
  </div>
}

export default Nav;
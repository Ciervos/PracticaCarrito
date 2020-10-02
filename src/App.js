import React,{useState} from 'react';
import { ProductsProvider } from "./contexts/ProductsContext";
import Nav from './components/Nav';
import CartaCont from './components/CartaCont';
import Carro from './components/Carro';


function App() {
  const [carro,setCarro] = useState([]);
  const [mostrar, setMostrar] = useState(false);

  const mockProv={
    productos:[{
    name: "Alfajor Oreo",
    img: "https://img-global.cpcdn.com/recipes/3280fd0973a007f7/400x400cq70/photo.jpg",
    price: 100,
    },
    {
    name: "Alfajores Chocolate",
    img: "http://afuegolento.com.ar/wp-content/uploads/2020/04/alfajor-1-1024x769.jpg",
    price: 240,
      },
    {
    name: "Pizza",
    img: "http://afuegolento.com.ar/wp-content/uploads/2016/09/aaa.jpg",
    price: 117,
    }],
    carrito: function(info) {
     const producto = mockProv.productos.filter((prod)=>{return(prod.name.includes(info))})
     setCarro([...carro,producto])  
    
    },
    handleMostrar: function(){
      setMostrar(!mostrar)
      }
  }
  
  return (
    <ProductsProvider value={mockProv}>
     <Nav/>
     <CartaCont/>
    {mostrar && <Carro lista={carro}/>}
    </ProductsProvider>
  );
}

export default App;

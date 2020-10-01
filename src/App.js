import React from 'react';
import { ProductsProvider } from "./contexts/ProductsContext";
import Nav from './components/Nav';
import CartaCont from './components/CartaCont';
import Carro from './components/Carro';


function App() {

  const mockProv={
    productos:[{
    name: "1",
    img: "https://img-global.cpcdn.com/recipes/3280fd0973a007f7/400x400cq70/photo.jpg",
    price: 100,
    },
    {
    name: "2",
    img: "http://afuegolento.com.ar/wp-content/uploads/2020/04/alfajor-1-1024x769.jpg",
    price: 240,
      },
    {
    name: "3",
    img: "http://afuegolento.com.ar/wp-content/uploads/2016/09/aaa.jpg",
    price: 117,
    }],
    carrito: [],
  }
  
  return (
    <ProductsProvider value={mockProv}>
     <Nav/>
     <CartaCont/>
     <Carro/>
    </ProductsProvider>
  );
}

export default App;

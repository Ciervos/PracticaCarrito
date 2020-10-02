import React from 'react'

function Product(props) {
  const {data} = props;
  const name = data[0].name;
  const precio = data[0].price;


return <p>{name} ${precio}</p>
}

export default Product;
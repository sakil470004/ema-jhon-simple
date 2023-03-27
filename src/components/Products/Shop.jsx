import React, { useEffect, useState } from 'react'
import Product from '../Product/Product'
import './Shop.css'

function Shop() {
  const [products, setProducts] = useState([])
  const [cart,setCart]=useState([])
const handleAddToCart=(product)=>{
  const newCart=[...cart,product];
  setCart(newCart)
}

  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])
  return (
    <div className='products'>
      <div className="card-container">
        {
          products.map(product => <Product
           key={product.id} 
           product={product}
           handleAddToCart={handleAddToCart}
           ></Product>)
        }
      </div>
      <div className="cart-container">
        <h4>Order Summery</h4>
        <p>Selected Items : {cart.length}</p>
      </div>
    </div>
  )
}

export default Shop
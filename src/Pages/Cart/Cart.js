import React from 'react'
import './Cart.css'
import Cartproducts from '../../../src/Pages/Cart/Cartproducts';
import { useStateValue } from '../../../src/Pages/Stateprovider';
import Subtotal from '../../../src/Pages/Subtotal/Subtotal'

function Cart() {
  const [{basket},dispatch] = useStateValue();
  return (
    <div className='cart'>
         <div className='cart_left'>
            <h2>Your Shopping Cart</h2>
            <hr></hr>
          <div>
            
            {basket.map(item => (
            <Cartproducts id={item.id} src={item.src} title={item.title} price={item.price} rating={item.rating}/>
            ))}
          </div>
         </div>
         <div className='cart_right'>
            <h2>  <Subtotal /> </h2>
         </div>
    </div>
  )
}

export default Cart
import React from 'react'
import "./Cartproducts.css"
import { useStateValue } from '../Stateprovider'

function Cartproducts({id,src,title,price,hidebutton,rating}) {
  const [{basket},dispatch] = useStateValue()

 const removefrombasket = () => {
      dispatch({
        type:"Remove_from_basket",
        id:id,
      })
 }
console.log('hii>', {basket})
  return (
    <div className='cartproducts' key={id} >
        <img src={src} alt='' className='cartproductimage'/>
        <div className='cartproductsinfo'>
          <div className='cartproducttitle'>
           {title}
          </div>
          <div className='cartproductprice'>
          ₹{price}
          </div>
          <div className='cartproductrating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span>🌟</span>
            ))}
          </div>
         {!hidebutton && (
          <button className='removebasketbtn' onClick={removefrombasket}>
          Remove from basket
          </button>
         )} 
        </div>
        
    </div>
    
    
  )
}

export default Cartproducts
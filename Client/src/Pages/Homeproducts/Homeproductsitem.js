import React from 'react'
import './Homeproductsitem.css'; 
import { useStateValue } from '../../../src/Pages/Stateprovider';

function Homeproductsitem({title , price, src,id,rating}) {
  const [{basket},dispatch] = useStateValue();
  
  const additemstocart = () => {
     dispatch({
      type:"add_to_basket",
      item:{
         id:id,
         title:title,
         price:price,
         src:src,
         rating:rating
      }
     })
    
}

  return (

    <div className="homeproducts_item" key={id}>
        <div className='homeproductdetails'>
         <div className="homeproductinfo">
            <p>{title}</p>
         </div>
         <div className='homeproductprice'>
            <p>₹ {price}</p>
            
          </div>
          <div className="homeproductrating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span>🌟</span>
            ))}
        </div>
        </div>
            <img src={src} alt=''  className='homeproductimage'></img>
            <div className='cartbtn'>
             <button className='addtocart' onClick={additemstocart}>Add to cart</button>
            </div>
    </div>
  )
}

export default Homeproductsitem




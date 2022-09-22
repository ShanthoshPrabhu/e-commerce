import React, { useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format'
import { useNavigate } from 'react-router-dom';
import { basketTotal } from '../../Reducer';
import { useStateValue } from '../Stateprovider';
import './Subtotal.css'

function Subtotal() {
  const navigate = useNavigate();
  const[{basket},dispatch] = useStateValue();
  const[empty,setempty]=useState(true);
  const[btnvalue,setbtnvalue]=useState('Your cart is empty');

  
  useEffect(()=>{
     
    if(basket.length != 0){
      setempty(false)
     }

  },[basket])
     
    

  return <div className='subtotal' >
        <CurrencyFormat 
        renderText={(value) => (
            <>
              <p>
                 subtotal({basket.length} items):
                 <strong>{value}</strong>
              </p>
              
            </>
        ) }
        
        decimalScale={2}
        value={basketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
        />


      {/* <button onClick={e =>navigate('/paymentpage')}>Proceed to checkout</button>      */}
      {/* <button onClick={e => navigate('/paymentpage')}>{value}</button> */}

      <button disabled={empty}  onClick={e =>navigate('/paymentpage')}>
             <span>{empty ?'Your cart is empty' : 'Proceed to checkout'}</span>
      </button>
        
    </div>
  
}

export default Subtotal
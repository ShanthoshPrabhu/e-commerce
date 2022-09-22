import moment from 'moment';
import React, { useEffect, useState } from 'react'
import Cartproducts from '../../../src/Pages/Cart/Cartproducts';

import { useStateValue } from '../../../src/Pages/Stateprovider';
import './Orderedproducts.css'
import CurrencyFormat from 'react-currency-format';


function Orderedproducts({orders}) {

    const [{basket,user},dispatch] = useStateValue();
    const [products,setproducts]=useState([]);

  return (
    <div className='orderproducts'>
        <h1>Your orders</h1>
        {orders?.map((id,index) => (
            
            <div className='container' key={index} data={id}>
            
            <p>{moment.unix(id.created).format("MMMM Do YYYY, h:mma")}</p>
          
           {id.products.map((item,index) => (
              <div key={index} data={item}>
                <Cartproducts id={item.id} src={item.src}  title={item.title} price={item.price} rating={item.rating} hidebutton/>
              </div>
               
           ))}
            
          
          
          <CurrencyFormat 
        renderText={(value) => (
            <>
            <div className='ordertotal'>Order total:{value}</div> 
            </>
        ) }
        
        decimalScale={2}
        value={id.total/100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
        />
        </div> 
            
            ))}
    </div>

  )
}

export default Orderedproducts



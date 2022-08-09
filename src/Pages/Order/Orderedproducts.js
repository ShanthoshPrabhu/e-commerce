import moment from 'moment';
import React, { useEffect, useState } from 'react'
import Cartproducts from '../../../src/Pages/Cart/Cartproducts';
import { db } from '../../../src/Pages/Firebase';
import { useStateValue } from '../../../src/Pages/Stateprovider';
import './Orderedproducts.css'
import CurrencyFormat from 'react-currency-format';

function Orderedproducts() {

    const [{basket,user},dispatch] = useStateValue();
    const[orders,setorders]=useState();

    useEffect(()=>{

        if(user){
            db.collection('Users')
            .doc(user?.uid)
            .collection('Orders')
            .orderBy('created','desc')
            .onSnapshot(snapshot =>{
                setorders(snapshot.docs.map(doc => ({
                    id:doc.id,
                    data:doc.data()
                })))
            })
        }
        else{
            setorders([])
        }
        
    },[user])

  return (
    <div className='orderproducts'>
        <h1>Your orders</h1>
        {orders?.map(order => (
        <div className='container'>
            
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
          
            {order.data.basket?.map(items => (
                <Cartproducts id={items.id} src={items.src} title={items.title} price={items.price} rating={items.rating} hidebutton/>
                ))}
          
          
          <CurrencyFormat 
        renderText={(value) => (
            <>
            <div className='ordertotal'>Order total:{value}</div> 
            </>
        ) }
        
        decimalScale={2}
        value={order.data.amount / 100}
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
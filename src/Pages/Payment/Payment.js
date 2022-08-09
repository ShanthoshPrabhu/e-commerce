import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Cartproducts from '../../../src/Pages/Cart/Cartproducts';
import { useStateValue } from '../../../src/Pages/Stateprovider';
import './Payment.css'
import {useElements, useStripe,CardElement} from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format';
import { basketTotal } from '../../../src/Reducer';
import axios from 'axios';
import { db } from '../../../src/Pages/Firebase';
//import { LineAxisOutlined } from '@mui/icons-material';

function Payment() {
  const [{basket,user},dispatch] = useStateValue();

  const navigate=useNavigate();

 const stripe = useStripe();
 const elements = useElements();

 const [error,seterror] = useState(null);
 const [disable,setdisable] = useState(true);
 const [succeeded,setsucceeded] = useState(false);
 const [processing,setprocessing] = useState("");
 const [clientsecret,setclientsecrent] = useState(true);

useEffect(()=>{
   
  const getclientsecret = async() => {
    
    //  setclientsecrent(response.data.clientsecret)

  //   const response = await axios.post("/payments/create", {method: "post", url:`/payments/create?total=${basketTotal(basket)*100}` })
  //   .then(response => { 
  //     console.log(response)
  //     setclientsecrent(response.data.clientsecret)
  // })
  // .catch(error => {
  //     console.log(error.response)
  // })


  //   axios.post(`http://localhost:5001/e-commerce-13170/us-central1/api/payments/create?total=${basketTotal(basket)*100}` )
  //    .then(response => { 
  //      console.log('hii',response)
  //      setclientsecrent(response.data.clientsecret)
  //  })
  //  .catch(error => {
  //      console.log(error.response)
  //  })


  // const response = await axios.post(`http://localhost:5001/e-commerce-13170/us-central1/api/payments/create?total=${basketTotal(basket)*100}` )
  // console.log(response)
  // setclientsecrent(response.data.clientsecret)

   const response= await axios({
     method:'post',
     url:`http://localhost:5001/e-commerce-13170/us-central1/api/payments/create?total=${basketTotal(basket)*100}`
   })  ;

   setclientsecrent(response.data.clientsecret)

  }

  getclientsecret()
},[basket])

console.log('secrettt',clientsecret)

 const submithandler = (event) => {
    event.preventDefault();
    setprocessing(true);

     stripe.confirmCardPayment(clientsecret,{

      
        // "description":"hii this is raghav",
        // "currency":"inr",
      
        payment_method:{
            card:elements.getElement(CardElement)}
    })
    .then(({paymentIntent}) =>{
      //  console.log('ggr',result.error)

      db.collection('Users')
        .doc(user?.uid)
        .collection('Orders')
        .doc(paymentIntent.id)
        .set({
           basket:basket,
          amount:paymentIntent.amount,
          created:paymentIntent.created,
        })

      setsucceeded(true);
      seterror(null);
      setprocessing(false);

    console.log('zzz',clientsecret)
    console.log('hiinnnn',paymentIntent)

    dispatch({
      type:"empty_basket",
    })

    navigate('/orderspage', {replace: true});
      
    })
 } 
 
 //console.log(elements.getElement(CardElement))

 const handlechange = e => {
   setdisable(e.empty);
   seterror(e.error ? e.error.message : " ")
 }

  return (
    <div className='payment'>
        <div className='container'>

            <h1>
              Cart (<Link to='/cart' className='checkoutlink'>{basket?.length} items</Link>)
            </h1>

              <div className='deliveryaddress'>
                  <div className='title'>
                    Deliver to 
                    </div>
                   <div className='address'>
                      <p>{user?.email}</p>
                    </div> 
              </div>

              <div className='reviewitems'>
                 <div className='title'>
                   Review items and delivery
                 </div>

                 <div className='buyingitems'>
                   {basket.map(item => (
                        <Cartproducts id={item.id} src={item.src} title={item.title} price={item.price} rating={item.rating}/>
                    ))}
                 </div>
              </div>

              <div className='deliveryaddress'>
                 <div className='title'>
                   Payment method
                 </div>
                 <div className='paymentmethod'>
                    <form onSubmit={submithandler}>
                      <CardElement onChange={handlechange}/>

                      <div className='paymentprice'>
                      <CurrencyFormat 
                            renderText={(value) => (
                              <>
                                <p>
                                   Order total({basket.length} items):
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
                       <button disabled={processing || disable || succeeded} className='buynowbtn'>
                          <span>{processing ?<p>Processing</p> : 'Buy now'}</span>
                        </button>
                      </div>

                      {error && <div>{error}</div>}
                    </form>
                 </div>
              </div>
        </div>
    </div>
  )
}

export default Payment


/*{
  method:'post',
  url:`/payments/create?total=${basketTotal(basket)*100}`,
}*/
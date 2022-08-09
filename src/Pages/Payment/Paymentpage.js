import React from 'react'
import Navbar from '../../../src/Pages/Navbar/Navbar'
import Payment from '../../../src/Pages/Payment/Payment'
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'




const promise = loadStripe('pk_test_51LQsMQSEZbNosnclAMiT76ev3dATx7wFX0yJc3iiULElyZQ35AQHFNrs8EbzfOagqsEja45l2Y6nQkDCughqgzOC00Hk8mCCrn')

function Paymentpage() {
  return (
    <div>
        <Navbar/>
        <Elements stripe={promise}>
           <Payment/>
        </Elements>
    </div>
  )
}

export default Paymentpage
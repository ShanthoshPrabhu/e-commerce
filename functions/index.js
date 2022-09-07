const functions = require("firebase-functions");

const express = require('express');
const cors = require('cors');

const stripe= require("stripe")('sk_test_51LQsMQSEZbNosnclVoiLIRCpRhQDJ74gB7ys7lWn8U4hvjctvnazqaFYpbzCiW7MxlItBRPRpb5nKc03oar5aZfR00HEQ8IsQ3')
 

const app = express();

app.use(cors());
app.use(express.json());


app.post('/payments/create', async(request,response) => {
    const total = request.query.total;
    console.log('hii',total)
     

    const paymentIntent = await stripe.paymentIntents.create({
        payment_method_types:["card"],
        amount:total,
        currency:"inr",
        
        
    } );

    console.log( 'ughhh' ,paymentIntent)
    response.send({
        clientsecret:paymentIntent.client_secret,
        paymentIntent:paymentIntent,
    })
})

exports.api=functions.https.onRequest(app)





const functions = require("firebase-functions");

const express = require('express');
const cors = require('cors');
// app.use(express.static('public'));

const stripe= require("stripe")('sk_test_51LQsMQSEZbNosnclVoiLIRCpRhQDJ74gB7ys7lWn8U4hvjctvnazqaFYpbzCiW7MxlItBRPRpb5nKc03oar5aZfR00HEQ8IsQ3')
 

const app = express();

app.use(cors());
app.use(express.json());

 app.get('/' , (request,response) => response.status(200).send('hello mf'))

app.post('/payments/create', async(request,response) => {
    const total = request.query.total;
    console.log('hii',total)
     

    const paymentIntent = await stripe.paymentIntents.create({
        // submit_type:'pay',
        // mode:'payment',
        payment_method_types:["card"],
        amount:total,
        currency:"inr",
        
        // currency:"usd",
        // success_url:"http://localhost:3000/",
        // cancel_url:"http://localhost:3000/paymentpage",
        // line_items:[
        //     {
        //         quantity:1,
        //       price_data:{
                
                
        //         product_data:{
        //             name:'zzz',

        //         }
        //       },
        //     } 
        //    ],
        // billing_address_collections:'auto',
        // description:"wtf",
    } );

    // const paymentIntent = await stripe.paymentIntents.create({
    //     amount:total,
    //     currency:"usd",
    //     payment_method_types:["card"],
    //     description:"wtf",
    //     // customer: "shan"
    // });

    // const customer = await stripe.customers.create({
    //     email: 'jenny.rosen@example.com',
    //     payment_method: 'pm_card_visa',
    //     name:"xxx,yy,z"
    //   });
    //  console.log('duck',customer)
    console.log( 'ughhh' ,paymentIntent)
    response.send({
        clientsecret:paymentIntent.client_secret,
        paymentIntent:paymentIntent,
    })
})

exports.api=functions.https.onRequest(app)




// firebase emulators:start
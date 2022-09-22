const express=require('express');
const cors = require('cors');
const bcrypt =require('bcrypt')
const path = require('path')
require('dotenv').config();
const stripe= require("stripe")('sk_test_51LQsMQSEZbNosnclVoiLIRCpRhQDJ74gB7ys7lWn8U4hvjctvnazqaFYpbzCiW7MxlItBRPRpb5nKc03oar5aZfR00HEQ8IsQ3')

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://ShanthoshPrabhu:shanthosh30@products.ginq3st.mongodb.net/?retryWrites=true&w=majority');


const User = new mongoose.Schema({
    name:{ type:String , required: true },
    email:{ type:String , required: true ,unique:true},
    password:{ type:String , required: true } ,
},{collection:'USER'},{timestamps:'true'})

const uuser = mongoose.model('Userdata',User)
module.exports = uuser

const Products =new mongoose.Schema({
  products:{type:Array},
  userId:{type:String , required: true},
  created:{type:String },
  total:{type:String }
},{collection:'PRODUCTS'},{timestamps:'true'})

const pproducts = mongoose.model('Userproducts',Products)
module.exports = pproducts



const app=express();
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname,'../Client/build')))


app.get('/',function(req,res){
    res.send('Hello there')
})

app.post('/auth/signup',async function(req,res){
   console.log(req.body)
    try {
  
     const nu= await uuser.create({
      name:req.body.name,
      email:req.body.email,
      password:req.body.password, 
    })
    res.json({status:'ok',error:'no error',user:nu})
    console.log('heyyii')
  } catch (err){
    res.json({status:'error',error:'invalid or existing email'})
    console.log(err)
  }
  
  })

  app.post('/auth/login',async function(req,res){
   console.log( req.body)
    try{
       const user = await uuser.findOne({
        email:req.body.email
       })
       !user&& res.status(400).json("wrong info")
       res.json(user._doc)
   
    } catch(err){
        res.json(err)
    }
  
  })

  app.post('/products/:id',async function(req,res){
   
    // console.log('products',req.body)
    console.log('userid',req.body.userId)
     try {
      const products = new pproducts(req.body)
      const savedproducts = await products.save();
      res.json({status:'ok'})
     } catch (err){

     }
  })
  app.get('/products/:id',async function(req,res){
    const getproducts = await pproducts.find({
      userId:req.params.id
    })
    
    res.json(getproducts)
  })

  app.post('/payments/create/', async(request,response) => {
    console.log(request.query)
    const total = request.query.total;
    
     

    const paymentIntent = await stripe.paymentIntents.create({
        payment_method_types:["card"],
        amount:total,
        currency:"inr",
    } );

    // console.log( 'ughhh' ,paymentIntent)
    response.send({
        clientsecret:paymentIntent.client_secret,
        paymentIntent:paymentIntent,
    })
})
// app.use('/Server/auth',authRoute)

app.listen(process.env.PORT || 2001)
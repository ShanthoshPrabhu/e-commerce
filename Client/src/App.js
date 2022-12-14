import React, { useEffect } from 'react'



import { BrowserRouter as Router,  Route,  Routes } from 'react-router-dom';
import Cartz from '../src/Pages/Cart/Cartz'
import Homepage from '../src/Pages/Home/Homepage';
import Loginpage from '../src/Pages/Login/Loginpage';
import { useStateValue } from '../src/Pages/Stateprovider';
import Paymentpage from '../src/Pages/Payment/Paymentpage';
import Orders from '../src/Pages/Order/Orders';
import Signup from '../src/Pages/Signup/Signup';



function App() {

  const [{user},dispatch] = useStateValue();
  
   
  useEffect(()=>{
    
    dispatch({
      type:'User',
      user: JSON.parse(localStorage.getItem('user'))
    })
    
  },[])
  
  return (
    <Router>
      
     <div className='app'>   
      <Routes>
        <Route path='/' exact element={<Homepage/>}/>
        <Route path="/cartz" element = {<Cartz/>}/>  
        <Route path='/login' element={<Loginpage/>}/>
        <Route path='/paymentpage' element={<Paymentpage/>}/>
        <Route path='/orderspage' element={<Orders/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      </div>
     
    </Router>
    
  );
}

export default App;



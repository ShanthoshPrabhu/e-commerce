import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'
import './Signup.css'
import axios from 'axios';

function Signup() {

    const navigate = useNavigate();
    const[name,setname]=useState('')
  const [email ,setemail] = useState('');
  const [password ,setpassword] = useState('');

  const createnewaccount = async(e) => {
    e.preventDefault();
    const body= {
      name,
      email,
      password,
    }
    console.log(body)
    const response=await axios.post('http://localhost:2002/auth/signup',body)
      
    window.location.reload();
      navigate('/')
     
  }

    return (
        <div className='signup'>
          <div className='signup_logo'>E-COM</div>
           <div className='signupcontainer'>
            
            
            <h2>Signup</h2>
            <form >
            <h4>Name</h4>
               <input type='text' value={name}  onChange={(e) => setname(e.target.value)}/>
            
               <h4>E-mail</h4>
               <input type='text' value={email}  onChange={(e) => setemail(e.target.value)}/>
    
               <h4>Password</h4>
               <input type="password" value={password}  onChange={(e) => setpassword(e.target.value)}/>
            </form>
            <div className='terms'>
             <p>By continuing, you agree to E-COM's Conditions of Use and Privacy Notice.</p>
             </div>
             
             <button type='submit' className='signupbutton' onClick={createnewaccount}>Signup</button>
             <div className='bottom'>
             <div>Already have an account?</div>
              <Link to='/login' className='loglink'>
                <div className='loginbtn'>Login</div>
              </Link>
             </div>
           </div>
    
           
        </div>
      )
}

export default Signup
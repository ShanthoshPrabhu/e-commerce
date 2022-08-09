import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../Firebase';
import {Link} from 'react-router-dom'
import './Signup.css'

function Signup() {

    const Lognavigate = useNavigate();
    const[name,setname]=useState('')
  const [email ,setemail] = useState('');
  const [password ,setpassword] = useState('');

  const createnewaccount = e => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(name,email,password)
        .then((auth) => {
          if(auth){
               Lognavigate('/')
          }
        })
        .catch(error => alert(error.message));
  }

    return (
        <div className='signup'>
          <div className='signup_logo'>E-COM</div>
           <div className='signupcontainer'>
            
            
            <h2>Signup</h2>
            <form onSubmit={createnewaccount}>
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
             
             <button type='submit' className='signupbutton'>Signup</button>
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
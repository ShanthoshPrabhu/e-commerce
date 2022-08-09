import {Facebook,Instagram,MailOutline,Phone,Pinterest,Room,Twitter,} from '@mui/icons-material';
import './Footer.css'

  
  
  
  const Footer = () => {
    return (
        <div className='container'>
            
           <div className='leftcont'>
             <div className='footerlogo'>
                <h1>E-COM</h1>
             </div>
             <div className='description'>
                blah blahblahblah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
                blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
                blah blah blah blah blah blah blah blah blah blah blah blah blah blah vblah blah blah blah blah 
             </div>
             <div className='socialmedia'>
                <div className='socialicons'><Facebook /></div>
                <div className='socialicons'><Instagram /></div>
                <div className='socialicons'><Pinterest /></div>
                <div className='socialicons'><Twitter /></div>
             </div>
           </div>
           
           <div className='centercont'>
             <div className='footerlinks'>Links</div>
             <ul className='lists'>
                <li>Home</li>
                <li>Cart</li>
                <li>Accessories</li>
                <li>My Account</li>
                <li>Wishlist</li>
                <li>Terms</li>
             </ul>
           </div>
           
           <div className='rightcont'>
                <div className='contactus'>Contact us</div>
                <div>
                <div className='address'><Room/> <p>69,West cross street,Bangalore.</p></div>
                <div className='phone'><Phone /><p>+91 9876543210</p></div>
                <div className='mail'><MailOutline  /><p>ecomorwhat@gmail.com</p></div>
                </div>
                
    
           </div>
        </div>
    
    );
  };
  
  export default Footer;
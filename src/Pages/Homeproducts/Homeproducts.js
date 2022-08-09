import React from 'react'
import Homeproductsitem from '../../../src/Pages/Homeproducts/Homeproductsitem'
import './Homeproducts.css'
function Homeproducts ()  {
  return (
    <div className="homeproducts">

        <div className="homeproducts_row">
           <Homeproductsitem id ='101' title='ASUS TUF Gaming A15 (2021), 15.6-inch (39.62 cm) FHD 144Hz, AMD Ryzen 7 4800H, 4GB NVIDIA GeForce RTX 3050 Graphics, Gaming Laptop (8GB/512GB SSD/Windows 11/Black/2.3 kg), FA506IC-HN005W' price={52990} src='./images/asuslap.jpg' rating={4}/>
           <Homeproductsitem id ='102' title='OnePlus Nord 2T 5G (Jade Fog, 8GB RAM, 128GB Storage) - Extra INR 3000 Exchange on OP Devices ' price={28575} src='./images/oneplusnord2t.jpg'  rating={3}/>
           <Homeproductsitem id ='103' title='APPLE Watch Series 7 GPS MKMY3HN/A 41 mm Aluminium Case  (White Strap, Regular)' price={14999} src='./images/applewatch.jpg'rating={3}/>
        </div>
        
        <div className='homeproducts_row'>
           <Homeproductsitem id ='104' title='OnePlus Buds Bluetooth Headset  (Nord Blue, True Wireless)' price={4999} src='./images/oneplusbuds.jpg'  rating={4}/>
           <Homeproductsitem id ='105' title='SAMSUNG Galaxy Tab S6 Lite 4 GB RAM 64 GB ROM 10.4 inch with Wi-Fi+4G Tablet (Oxford Grey)' price={25399} src='./images/samsungtab.jpg' rating={3}/>
           <Homeproductsitem id ='106' title="NK Air Max Axis Men's Shoes Running Shoes For Men" price={7899} src='./images/nike.jpg' rating={4}/>
        </div>

        

    </div>
  )
}

export default Homeproducts
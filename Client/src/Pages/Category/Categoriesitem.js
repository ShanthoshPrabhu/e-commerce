import styled from "styled-components"
import React from 'react'
import "./Categoriesitem.css"

const Imageci=styled.img`
 width: 100%;
 height: 80%;
 object-fit: cover;
 &:hover{
    transform: translateY(-10px);
    border-radius: 10px;
    box-shadow: 6px 6px 6px 6px rgb(185, 199, 199);
    
}
`
const Infoci=styled.div`
   position:absolute;
   color: white;
   bottom: 100px;
   left: 10px;
   font-size: 20px;
`
const Titleci=styled.div`
font-weight: bold;
  
`


const Containerci=styled.div`
  flex:1;
  margin: 3px;
  height: 60vh;
  position:relative;
`

export function Categoriesitem  ({item})  {
  return (
  <Containerci className="containerci">
       <Imageci src={item.img} className='imageci'/>
       <Infoci className="infoci">
         <Titleci className="titleci">{item.title}</Titleci>
       </Infoci>
  </Containerci>
  )
}

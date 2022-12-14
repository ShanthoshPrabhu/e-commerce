
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from "react"
import styled from "styled-components"
import {Sliderinfo} from './Sliderinfo'
import {mobile} from '../../../src/Responsive'




const Slidercontainer =styled.div`
      width: 1514px;
    height: 400px;
    display: flex;
    /* background-color: orange; */
    overflow: hidden;
    ${mobile({ 
      width:'364px',
      height:'200px',
      paddingLeft:'14px',
      paddingRight:'20px'
      // backgroundColor:'red'
      // display:'none'
    })}
`
const Arrow=styled.div`
    width: 50px;
    height: 120px;
    background-color: rgba(225,245,255,0.6);
    color: black;
    /* background-color: red; */
    border-radius:10px;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom:360px;
    position: absolute;
    left:${props => props.direction === "left"&& "20px" };
    right: ${props => props.direction === "right"&& "20px" };
    margin: auto;
    cursor: pointer;
    
    z-index: 2;
    &:hover{
    width: 54px;
    height: 124px;
    
}
${mobile({ 
  display:'none',
      position:'absolute',
      top:'68px',
      width:'30px',
      height:'80px',
      borderRadius:'3px',
      
    })}
`
const Wrapperslider=styled.div`
   height: 100%;
   display: flex;
   transition: 1s ease;
   transform: translateX(${(props) => props.slideindex*-1514}px);
   ${mobile({ 
    transition: '1s ease',
    
    //  transform: "translateX(${(props) => props.slideindex*-360}px)",
      // display:'flex'
    })}
`
const Slide = styled.div`
  display: flex;
  align-items: center;
  height: 500px;
  background-color: ${props => props.bg};
  width: 1520px;
  ${mobile({ 
      position:'relative',
      width:'360px',
      height:'200px',
      top:'45px',
      right:'14px',
    
    })}
`
const Imgcontainer=styled.div`
   flex: 1;
   height: 80%;
   width: 1000px;
   ${mobile({ 
       position:'relative',
       right:'160px',
       width:'200px',
       
    })}
`
const Image = styled.img`
  position: relative;
  height: 75%;
  align-items: center;
  left:200px;
  max-width: 100%;
  margin-bottom: -30px;
  ${mobile({ 
      width:'200px',
      height:'100px',
     
    })}
  //border-radius10px;
  //mask-image: linear-gradient( to bottom,black , transparent);
 `
const Info= styled.div`
  position: relative;
  flex: 1;
  margin-left: 30px;
  right:250px;
  text-align: center;
  margin-bottom: 13em;
  max-width: 29em;
  
  font-size: 16px;
  color: ${props => props.color};
  ${mobile({ 
     position:'relative',
      left:'18px',
      //  color:'red',
       top:'50px',
       maxWidth:'160px'
    })}
`
const Title=styled.div`
  font-weight:600;
  font-size:30px;
  color: rgb(206, 126, 37);
  ${mobile({ 
      position:'relative',
       fontSize:'12px',
       right:'8px'
    })}
`

const Imgcontent=styled.div`
   font-size: 24px;
   margin-right: 35px;
   margin-bottom: -50px;
   ${mobile({ 
       fontSize:'12px'
    })}
`

   //background-color:rgb(214,214,214);
    



function Slider() {
    const [slideindex,setslideindex] = useState(0)
    const clickhandler=(direction) =>{
      if(direction==='left'){
        setslideindex(slideindex > 0 ? slideindex-1 :2)
      }
      else{
        setslideindex(slideindex < 2 ? slideindex + 1 : 0)
      }
    }

  return (
    <Slidercontainer >
      
      <Arrow direction="left"  className='leftarrow' onClick={()=>clickhandler('left')}>
        <ArrowBackIosNewIcon/>
      </Arrow>
      
      <Wrapperslider slideindex={slideindex} className='wrapslider'>
       {Sliderinfo.map((item) => (
        
        <Slide bg={item.bg} key={item.id}>
          <Imgcontainer>
             <Image src={item.img} style={{borderRadius:'0px'}}/>
          </Imgcontainer>
          <Info color={item.txtcolor}>
            <Title >{item.title}</Title> <br/>
            <Imgcontent>{item.imgcontent}
            </Imgcontent>
          </Info>
        </Slide>
        
        ))}
      </Wrapperslider>
      
      <Arrow direction="right"  className='rightarrow' onClick={()=>clickhandler('right')}>
        <ArrowForwardIosIcon/>
      </Arrow>
      
    </Slidercontainer>
  )
}

export default Slider


/*

*/
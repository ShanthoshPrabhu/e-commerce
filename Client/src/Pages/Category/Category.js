  // import styled from "styled-components"
import { Categories } from "./Categoriesdata"
import React from 'react'
import { Categoriesitem } from "./Categoriesitem"
import './Category.css'



function Category () {
  return( 
  <div className="cont">
    {Categories.map(item => (
       <Categoriesitem item={item} key={item.id}/>
    ))}
  </div>
  )
}

export default Category;
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { FetchData } from '../utility'
import { NavLink } from 'react-router-dom'
import './Tour.css'
import {LazyLoadImage} from 'react-lazy-load-image-component'

const  url='https://raw.githubusercontent.com/mkatay/json-tours/main/tours'

export const Tour = () => {
  const param=useParams()
const [tour,setTour]=useState(null)

  useEffect(()=>{
    FetchData(url,setTour,param.id)
  },[])
  
  return (
    <div className='tour-container' >
      
      {tour && <div className='tour-holder'>

      <h3>{tour.name}</h3>
      <LazyLoadImage className='tour-img'
      alt={tour.name}
     effect='blur'
      src={tour.image} // use normal <img> attributes as props
      placeholderSrc='../assets/react.svg' />
      <p>{tour.name}</p>
      <p>Ár:{tour.price}</p>
      <NavLink to={'/traveller/tours'}>Vissza az utazásokhoz</NavLink>
      </div>}
      
      </div>
  )
}

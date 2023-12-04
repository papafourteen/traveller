import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Card.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'


export const Card = ({id,image,name,info,price}) => {

    const navigate=useNavigate()
  return (
    <div className='card'>
        <LazyLoadImage className='card-img'
      alt={name}
     effect='blur'
     height={200}
      src={image} // use normal <img> attributes as props
      placeholderSrc='../assets/react.svg' />
        <div className='card-content'>
            <h3>{name}</h3>
            <p>{info.substring(1, 100)}</p>
            <button onClick={()=>navigate('/traveller/tour/'+id)}>Details</button>

        </div>
    </div>
  )
}

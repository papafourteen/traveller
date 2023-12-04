import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { FetchData, getData } from '../utility'
import  './Tours.css'
import { Card } from '../components/Card'


const  url='https://raw.githubusercontent.com/mkatay/json-tours/main/tours'
export const Tours = () => {
  const [tours,setTours]=useState([])

  useEffect(()=>{
    FetchData(url,setTours)
  },[])
  console.log(tours)
  return (
    <div className='components-container'>
        <h2>Tours</h2>
        <div className="card-holder">
          {tours.map(obj=> <Card key={obj.id} {...obj}  />)}
        </div>
    </div>
  )
}

import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export const Home = () => {
    const [isanimated,setIsAnimated]=useState(false)

    useEffect(()=>{
        const id=setTimeout(()=>{
            setIsAnimated(true)
        },500)
        return ()=>{
            clearTimeout(id)
        }

    },[])

    const animatedStyle={
        opacity: isanimated ? 1 : 0,
        position:'absolute',
        bottom:'50%',
        left:'50%',
        transform: `translate(-50%, -50%) ${isanimated ? 'translateX(0)' : 'translateX(-100)'}`,
        transition: 'opacity 1s, transform 1s'

    }
  return (
    <div className='components-container'>
        <h1 style={animatedStyle} className='text-gradient'>Home</h1>
    </div>
  )
}

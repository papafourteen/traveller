import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { useState } from 'react'
import { useEffect } from 'react'
const pages=[
    {path:'/traveller/home', name:'Home'},
    {path:'/traveller/about', name:'About'},
    {path:'/traveller/tours', name:'Tours'},
    {path:'/traveller/contact', name:'Contact'}
]

export const Navbar = () => {
    const handleResize=()=>{
        setIsMobileView(window.innerWidth<768)
    }
    const [ismobileview,setIsMobileView]=useState(window.innerWidth<768)
    const [ismobilemenuopen,setIsMObileMenueOpen]=useState(false)

    useEffect(()=>{
        window.addEventListener('resize',handleResize)
        return ()=>{window.removeEventListener('resize',handleResize)}
    },[])
  return (
    
    <div className='menu-holder'>
        <div>
            <h3>Brand Name</h3>
        </div>
        {ismobileview ? (

            <div onClick={()=>{setIsMObileMenueOpen(!ismobilemenuopen)}}>
                &#9776;
                </div>

        ) 
        :(
        <div >
            <ul>
                {pages.map(obj=>
                    <NavLink to={obj.path} key={obj.name}>
                        <li className='text-gradient' onClick={()=>{setIsMObileMenueOpen(!ismobilemenuopen)}}>{obj.name}</li>
                    </NavLink>
                    
                    )}
            </ul>
        </div>
        )}
        {ismobileview && (
            <div style={{height: ismobilemenuopen ? '180px' : '0'}}>
            <ul className='mobile'>
                {pages.map(obj=>
                    <NavLink to={obj.path} key={obj.name}>
                        <li className='text-gradient'>{obj.name}</li>
                    </NavLink>
                    )}
                    
                    </ul>
       </div>
        )}
       </div>
    ) 
}

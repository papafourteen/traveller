import React from 'react'
import { useState } from 'react'
import { ContactData } from '../ContactData.class'
import './Contact.css'

export const Contact = () => {
  const [email,setEmail]=useState('')
  const [message,setMessage]=useState('')

  const handleSubmit=(e)=>{
    e.preventDefault()
    const timestamp= Date.now()
   const newMessage= new ContactData(timestamp,email,message)
   console.log(newMessage)
  }

  return (
    <div className='components-container'>
      <h2>Kapcsolat</h2>
        <div className='contact-holder'>
        
        
        <form onSubmit={handleSubmit}>
        
          <label htmlFor="email">Email cím</label>
          <input type="email" id='email' required value={email}
          onChange={(e)=>setEmail(e.target.value)}/>
          <br/>
          <label htmlFor="message">Message</label>
          <textarea value={message} id="" cols="30" rows="10" required
          onChange={(e)=>setMessage(e.target.value)}
          ></textarea>
          <br/>
          <button type='küldés'>Küldés</button>
          
        </form>
        </div>
    </div>
  )
}

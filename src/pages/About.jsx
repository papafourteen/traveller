import React from 'react'
import about1 from '../assets/about1.jpg'
import about2 from '../assets/about2.jpg'
import './About.css'

export const About = () => {
  return (
    <div className='about-container'>
    <h3>About</h3>
    <div className="holder">
      <div className="about-section">
        <img src={about1} alt="about 1" />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis eos consequatur eligendi, tempore impedit ad consequuntur voluptatum deleniti earum aut dolorum dignissimos id ratione saepe perferendis voluptates accusantium placeat nisi?</p>
        </div>
        <div className="about-section">
          
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, vero totam a suscipit rem sunt maiores quod, cumque recusandae et quae praesentium assumenda ut illo quos! Saepe voluptatem non facilis.</p>
        <img src={about2} alt="about2" />
        
      </div>

    </div>
    </div>
  )
}

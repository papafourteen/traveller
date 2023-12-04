import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Background } from './components/Background'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Tours } from './pages/Tours'
import { Contact } from './pages/Contact'
import { Navbar } from './components/Navbar'
import { Outlet } from 'react-router-dom'
import { Tour } from './pages/Tour'

function App() {
  

  return (
   <BrowserRouter>
   <div className="content">
    <Background />
    <Navbar />
   </div>
   <Routes>
   <Route path='/traveller' element={<Outlet/>}>
    <Route index element={<Home />}/>
    <Route path='about' element={<About />}/>
    <Route path='tours' element={<Tours />}/>
    <Route path='tour/:id' element={<Tour />}/>
    <Route path='contact' element={<Contact />}/>
    </Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App

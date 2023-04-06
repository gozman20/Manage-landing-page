import React from 'react'
import Navbar from './Components/Navbar'
import styles from './style'
import Hero  from './Components/Hero'
import Manage from './Components/Manage'
import About from './Components/About'
import Feedback from './Components/Feedback'
import Simplify from './Components/Simplify'



export default function App() {
  return (
   
    
    <div >
   <Navbar/>
   <Hero/>
   <Manage/>
   <Feedback/>
   <Simplify/> 
   <About/> 
    </div>
   
  )
}

import React, { useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'

export default function Navbar() {
    const [state,setState]=useState(true)
   const items=[<a href='#'>Pricing</a>,<a href='#'>Products</a>,<a href='#'>About Us</a>,<a href='#'>Careers</a>,<a href='#'>Community</a>]


    const toggler=()=>{
        setState(!state)
    }

  return (
    // flex container
    
    <div class="container mx-auto px-2  flex md:block justify-between ">
        <di class='flex items-center justify-between m-3  '>
            <div class='w-24'>
            <img src='src/images/orange.jfif' />
            </div>
           
           <div class='hidden md:flex items-center space-x-5   text-base '>
                  <div className='hover:bg-orange hover:rounded-full p-2 px-4'>
                Pricing
                    </div>
           <div class='hover:bg-orange hover:rounded-full p-2 px-4'>
            Products
           </div>
           <div class='hover:bg-orange hover:rounded-full p-2 px-4'>
            About Us
           </div>
           <div class='hover:bg-orange hover:rounded-full p-2 px-4'> 
            Careers
           </div>
           <div class='hover:bg-orange hover:rounded-full p-2 px-4 '>
            Community
           </div>
           </div>
           <button class='hidden md:block bg-orange  hover:bg-brightRedLight text-white p-3  pt-2 px-6 rounded-full'>Get started</button>
        </di>
        <button onClick={toggler} class='flex items-center -mt-5'>
        {state? <GiHamburgerMenu size={30} class='md:hidden '/> :
         <AiOutlineClose size={30} class='md:hidden'/> }
        </button>
      
       
  {state===false && <div class={`md:hidden  absolute p-2 top-10 right-10  bg-slate-100 h-96 w-[200px] duration-700 `}>

<ul class='text-black-100 text-xl mt-6'>
    {items.map((item,id)=>(
        <li key={id} class={`text-lg flex items-center  '' duration-500  cursor-pointer p-2  hover:bg-brightRed rounded-lg`}>{item}</li>
    ))}
</ul>

 

    </div>}

    </div>
  )
}

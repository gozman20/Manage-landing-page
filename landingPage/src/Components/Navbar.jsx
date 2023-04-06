import React, { useState } from 'react'
import { links } from '../constants'
import styles from '../style'
import Button from './Button'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'

export default function Navbar() {

  const [toggle,setToggle]=useState(false)


  return (

    
    <div className={`${styles.paddingX}  relative`} >
       <div className={`${styles.boxWidth}`}>
           <nav className='flex flex-row   justify-between items-center py-6'>
              <img src='https://raw.githubusercontent.com/bradtraversy/tailwind-landing-page/249d73eaa143aa213a5d56de2b2a941f68b20a7a/img/logo.svg ' alt='' className='w-[120px] h-[30px]'/>
              
              
              <div className='sm:flex flew-row justify-center items-center hidden space-x-[10px]'>
              <ul className='sm:flex flex-row justify-end items-center gap-x-3 '>
                  {links.map((link,index)=>(
                
                <li key={link.id} href={`#${link.id}`} className='hover:bg-buttonhover font-semibold cursor-pointer rounded-full px-2 text-[16px] py-1'>{link.title}</li>
                ))}
                
              </ul>

              <Button />
              </div>
             
             

            {toggle? <AiOutlineClose className='sm:hidden text-[20px]' onClick={()=>setToggle((prev)=>!prev)}/>
            :
            <GiHamburgerMenu className='sm:hidden text-[20px]' onClick={()=>setToggle((prev)=>!prev)}/>} 


             {toggle && <ul className='sm:hidden flex flex-col bg-myorange min-w-[120px] justify-center items-center gap-y-3 absolute top-[50px] right-10'>
                  {links.map((link,index)=>(
                
                <li key={link.id} className='hover:bg-buttonhover font-semibold cursor-pointer rounded-full px-2 text-[16px] py-1'>{link.title}</li>
                ))}
             </ul>}

              </nav>
     </div>
     </div>
  )
}

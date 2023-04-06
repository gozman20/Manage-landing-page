import React from 'react'
import styles from '../style'
import {AiOutlineFacebook,AiFillYoutube} from 'react-icons/ai'
import {FiTwitter} from 'react-icons/fi'
import {BsPinterest,BsInstagram} from 'react-icons/bs'

export default function About() {
  return (
    <div className={`${styles.paddingX} ${styles.paddingY} bg-darkBlack`}>
      <div className={`${styles.boxWidth}`}>
      <section id='About ' className='flex flex-col-reverse sm:flex-row justify-between items-center gap-y-4 sm:gap-y-0 gap-x-8'>
      
      <div className='flex flex-col justify-center items-center gap-y-8 sm:items-start '>
        <img src='https://raw.githubusercontent.com/bradtraversy/tailwind-landing-page/249d73eaa143aa213a5d56de2b2a941f68b20a7a/img/logo-white.svg' className='w-[120px] h-[30px]'/>
        <div className='flex flex-row justify-center gap-x-3 items-center  text-[25px]'>
          <AiOutlineFacebook className=' bg-slate-50 ' onClick={() => window.open('https://facebook.com')}/>
          <AiFillYoutube className=' bg-slate-50' onClick={() => window.open('https://youtube.com')}/>
          <FiTwitter className=' bg-slate-50' onClick={() => window.open('https://twitter.com')}/>
          <BsPinterest className=' bg-slate-50' onClick={() => window.open('https://pintereset.com')}/>
          <BsInstagram className=' bg-slate-50' onClick={() => window.open('https://instagram')}/>
        </div>
        <p className='sm:hidden text-white'>Copy right 2020.All right reserved</p>
      </div>
      <div className='flex flex-row justify-between gap-x-10 items-start'>
            <ul className='flex flex-col justify-center items-start gap-y-4'>
              <li className='text-white'><a>Home</a></li>
              <li className='text-white'><a>Pricing</a></li>
              <li className='text-white'><a>Products</a></li>
              <li className='text-white'><a>About Us</a></li>
            </ul>
            <ul className='flex flex-col justify-center items-start gap-y-4'>
              <li className='text-white'><a>Carrer</a></li>
              <li className='text-white'><a>Community</a></li>
              <li className='text-white'><a>Privacy Policy</a></li>
            </ul>
      </div>
          
          

    
    
     <div className='flex flex-col gap-y-6 '>
          <div className='flex flex-row justify-between gap-x-4 items-center'>
              <form>
                <input type='text' placeholder='Updates in your inbox' className='bg-white focus:outline-none p-2 rounded-full' />
              </form>
               <button className= 'bg-orange-600 text-white rounded-full py-1 px-2'>Go</button>
             
         </div>
           <p className='sm:block hidden text-white'>Copy right 2020. All right reserved</p>
    </div>
    
       </section>
    </div>
  </div>
  )
}
      
            
              



import React from 'react'
import styles from '../style'
import Button from './Button'

export default function Hero() {
  return (
    <div className={`${styles.paddingY} ${styles.flexStart} ${styles.paddingX} `}>
    <div className={`${styles.boxWidth}`}>
    <section id='Product'> 

      <div  className='flex flex-col-reverse  sm:flex-row gap-y-6 sm:gap-y-0 gap-x-8'>
        {/* -----left side---- */}
       <div className='flex flex-col   gap-y-10 text-center sm:text-left '>
        <h1 className='md:text-[54px] text-[30px] font-bold'>Bring everyone <br className='sm:block hidden'/>together to build better product</h1>
        <p className=' sm:max-w-[470px] font-normal text-[16px] text-dimBlack   '>
        Find the latest breaking news and information on the top stories, weather, business, entertainment, politics, and more. For in-depth coverage,
        </p>

        <div><Button/></div>
        
       </div>

       {/* ------right-side---- */}
       <div >
        <img src='https://raw.githubusercontent.com/bradtraversy/tailwind-landing-page/249d73eaa143aa213a5d56de2b2a941f68b20a7a/img/illustration-intro.svg' className='w-[100%] h-[100%]'/>
       </div>
      </div>

    </section>
    </div>
    </div>
  )
}

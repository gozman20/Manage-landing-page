import React from 'react'
import styles from '../style'
import Button from './Button'

export default function Feedback() {
  return (
    <section className={`${styles.paddingY} flex flex-col justify-center items-center gap-y-10` }>
        <div className='flex flex-col gap-y-6 text-center'>
          <h2 className='text-[25px]  text-center font-semibold'> What they have said </h2>
        </div>
          
     


      <div className='flex flex-col justify-between items-center gap-y-6 gap-x-8 sm:flex-row '>
      <div className='flex flex-col justify-center p-10 items-center  shadow-xl '>
             <img src='src/images/avatar-ali.png' alt='' className='w-[65px] h-[65px] -mt-[60px]'/>
             <h2 className='font-semibold text-[16px] mt-9'>Ali</h2>
             <p className={`${styles.paragraph} max-w-[370px] text-center`}>Manage provides all the functionality your team needs,without the complexity. Our business is tailor-made to suit everyone</p>
         </div>
         <div className='hidden sm:flex flex-col justify-center p-10 items-center  shadow-xl '>
             <img src='src/images/avatar-anisha.png' alt='' className='w-[65px] h-[65px] -mt-[60px]'/>
             <h2 className='font-semibold text-[16px] mt-9'>Anisha</h2>
             <p className={`${styles.paragraph} max-w-[370px] text-center`}>Manage provides all the functionality your team needs,without the complexity. Our business is tailor-made to suit everyone</p>
         </div>
          <div className='hidden sm:flex flex-col justify-center p-10 items-center  shadow-xl '>
             <img src='src/images/avatar-richard.png' alt='' className='w-[65px] h-[65px] -mt-[60px]'/>
             <h2 className='font-semibold text-[16px] mt-9'>Richard</h2>
             <p className={`${styles.paragraph} max-w-[370px] text-center`}>Manage provides all the functionality your team needs,without the complexity. Our business is tailor-made to suit everyone</p>
         </div>
      </div>
              <Button/>
    </section>
  )
}

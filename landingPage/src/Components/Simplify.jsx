import React from 'react'
import styles from '../style'
import Button from './Button'

export default function Simplify() {
  return (
    <div className={`${styles.paddingX} ${styles.paddingY} bg-orange-600`}>
    <div className={`${styles.boxWidth}`}>
    <section className='flex flex-col sm:flex-row justify-between items-center gap-y-6'>
      <h2 className='font-bold text-[40px] text-white text-center sm:text-left'>Simplify how your team <br className='sm:block hidden'/>works today</h2>
      <Button mystyle='bg-white'/>
      </section>
    </div>
    </div>
  )
}

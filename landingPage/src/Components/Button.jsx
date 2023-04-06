import React from 'react'

export default function Button({mystyle}) {
  return (
   
      <button type='button' className={`${mystyle} rounded-full py-2 px-3 bg-myorange hover:bg-buttonhover`}>Get started</button>
    
  )
}

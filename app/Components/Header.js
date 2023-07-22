import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className='relative h-80 mx-auto  '>
        
      <Image
        fill
        src="/abhay.jpg"
        className='object-cover  mx-auto'
        alt=""
      />

      </div>
    
  )
}

export default Header
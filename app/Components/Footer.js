import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <div className='flex justify-around bg-[#161619] px-5 py-6 '>
      <Image src='/Facebook.png' alt='' width={25} height={25}/>
      <Image src='/GitHub.png' alt='' width={25} height={25}/>
      <Image src='/Instagram.png' alt='' width={25} height={25}/>
      <Image src='/Twitter.png' alt='' width={25} height={25}/>
    </div>
  )
}

export default Footer
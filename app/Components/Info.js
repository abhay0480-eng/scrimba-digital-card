import React from 'react'

export default function Info({title,desc}) {
  return (
    <div className='text-white text-left px-5 mb-3'>
        <h2 className='text-[16px] font-bold mb-1'>{title}</h2>
        <p className='text-[10px] text-[#dcdcdc]'>{desc}</p>
    </div>
  )
}

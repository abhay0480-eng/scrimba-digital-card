import React from 'react'

export default function Button({btnText,styles,links}) {
  return (
    <div>
       <a href={links} className={`${styles} px-7 py-3 rounded-lg my-6 flex`} >{btnText=="Email"?<img src="/Mail.png" alt="" className='mr-1 object-cover'/>:<img src="/linkedin.png" alt="" className='mr-1 object-cover '/>} {btnText}</a>
    </div>
  )
}

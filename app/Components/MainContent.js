import React from 'react'
import Button from './Button'
import Info from './Info'


function MainContent() {
  return (
    <div className='bg-[#1A1B21] mx-auto'>
        <h2 className='text-white text-[25px] font-bold mt-5'>Abhay Kumar</h2>
        <p className='text-[#F3BF99] text-[12px] mt-1 mb-3'>Frontend Developer</p>
        <p className='text-[#F5F5F5] text-[10px]'>github.com/abhay0480-eng</p>
        <div className='flex justify-between px-5'>
          <Button styles="bg-white text-black" btnText="Email" links="https://mail.google.com/mail/u/0/#inbox"/>
          <Button styles="bg-[#5093E2] text-white" btnText="LinkedIn" links="https://www.linkedin.com/in/abhay-kumar-587617155/"/>
        </div>
       <div>
        <Info title="About" desc="I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn." />
        <Info title="Interests" desc="Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic."/>
       </div>
    </div>
  )
  
}

export default MainContent
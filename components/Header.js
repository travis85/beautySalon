import React from 'react'
import logo from '../public/logo.jpeg'
import Image from 'next/image'

export default function Header() {
  return (
    <div className="bg-fuchsia-300 p-3 h-36">
      <div >
        <p>Beauty Salon By: Random Person 
       
        </p> 
        <p> (734)123-4567</p>
         
      
      </div>
      <div className='absolute top-4 right-2'>
        <Image src={logo} width={75} height={75}/>
      </div>
      
      
    </div>
  )
}

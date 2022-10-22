import React from 'react'
import logo from '../public/logo1.jpeg'
import Image from 'next/image'
import headerBackgroundPhoto from '../public/backround/headerBackgroundPhoto.jpeg'
import Link from 'next/link'

export default function Header() {
  
  return (
    <div className='h-48' style={{
      backgroundImage: `url(${headerBackgroundPhoto.src})`,
      }}>
      <div className='text-white'>
        <p>Beauty Salon By: <span className='text-pink-500'>Random Person </span><br></br>
          (734)123-4567
        </p>
       </div>
      <div className='grid justify-center' >
        <h1 className=''>Book Your Appointment Today!</h1>
        <div className='flex justify-center'>
          <Link href={'/braids'}><h5 className='mr-5 cursor-pointer transition ease-in-out delay-150 text-pink-500 hover:-translate-y-1 hover:scale-110 hover:text-pink-600 duration-300'>Hair</h5></Link>
          <Link href={'/nails'}><h5 className='mr-5 cursor-pointer transition ease-in-out delay-150 text-pink-500 hover:-translate-y-1 hover:scale-110 hover:text-pink-600 duration-300'>Nails</h5></Link>
          <Link href={'/braids'}><h5 className='cursor-pointer transition ease-in-out delay-150 text-pink-500 hover:-translate-y-1 hover:scale-110 hover:text-pink-600 duration-300'>Lashes & Brows</h5></Link>
        </div>
        
      </div>
      <div className='absolute top-4 right-2'>
        <Image src={logo} width={75} height={75}/>
      </div>
      
      
    </div>
  )
}

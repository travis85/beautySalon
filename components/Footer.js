import React from 'react'
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className='grid grid-cols-3 place-items-center p-24'>
      <div>
        <span className='text-blue-500'><h5>Follow Us:</h5></span>
        <div className='flex gap-2 '>
          <a href='/' className='bg-white hover:bg-blue-400'> < FaFacebook className='h-8 w-8'/></a>
          <a href='/' className='bg-white hover:bg-blue-400'>< FaInstagram className='h-8 w-8'/></a>
          <a href='/' className='bg-white hover:bg-blue-400'>< FaTwitter className='h-8 w-8'/></a>
        </div>
      </div>

      <div>
        <span className='text-blue-500'><h5>Join Our Team</h5></span>
        <p>
          oursalon@gmail.com <br></br>
          (734) 123-4567
          </p>
        </div>
      <div className=''>
        <span className='text-blue-500'><h5>Address:</h5></span>
        <p>
          123 Main Street<br></br>
          Romulus, Mi 48174
        </p>
      </div>
    </div>
  )
}

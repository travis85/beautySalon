import React from 'react'
import salonPhoto from '../public/salonPhoto.jpeg'
import Image from 'next/image'
export default function AboutSalon() {
    return (
        <div className='grid place-items-center'>
            <div >
                <Image src={salonPhoto} width={1800} height={800} ></Image>
            </div>
            
            {/* <div className='absolute text-white'>
                <p className=''>
                    We use the latest hair care 
                </p>
            </div> */}
        </div>
      
  )
}
 
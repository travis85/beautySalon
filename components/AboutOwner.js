import React from 'react'
import ownerPhoto from '../public/ownerPhoto.jpeg'
import aboutOwnerPhoto from '../public/aboutOwnerBgPhoto.jpeg'
import Image from 'next/image'



export default function AboutOwner() {
    return (
        <div className='p-24' style={{
            backgroundImage: `url(${aboutOwnerPhoto.src})`,
            width: '100%',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }}>
            <div>
                <h4>My name is Michelle</h4>
                <p>
                I've been a stylist for 10 years with 
                </p>
            </div>
            <div className='float-right pr-2'>
                <Image src={ownerPhoto} width={400} height={400}></Image>
            </div>
            
        </div>
    )
}

import Image from 'next/image'
import React from 'react'
import { FeaturedStylesInfo } from './FeaturedStyleInfo'
import Link from 'next/link'
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

export default function () {
    

    return (
        
        <div className=''>
            <ul>    
                <div className='grid grid-cols-3 '>
                    {FeaturedStylesInfo.map((info) => {
                
                        return (
                            <li key={info.id}>
                                <div className='p-1'>
                                <Link href={info.link}>
                                    <div className='cursor-pointer opacity-95  bg-fuchsia-200 p-3 rounded-3xl hover:scale-[1.1] hover:bg-fuchsia-300 hover:opacity-100'>
                                        <div className=''>
                                            <OverlayTrigger
                                            placement="right"
                                            overlay={
                                                <Tooltip>
                                                    {info.title}
                                                </Tooltip>
                                            }
                                        >
                                        <a><Image src={info.photo} width={200} height={200} /></a>
                                        </OverlayTrigger>
                                        </div>
                                        
                                    </div>
                                    
                                </Link>
                            </div>
                        
                            </li>
                        
                        
                        )
               
                    })} 
                </div>
            </ul>
        </div>
    );
}

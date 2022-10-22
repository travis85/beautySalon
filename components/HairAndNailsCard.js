import React from 'react'
import Image from 'next/image'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link'
import { currencyFormatter } from '../utils/currencyFormatter'

export default function HairAndNailsCard({cardData}) {
  return (
      <ul>
        <div className='grid grid-cols-3 place-items-center'>
            {cardData.map((card) => {
                return (
                    <li key={card.id} className='m-2'>
                        <Card style={{ width: '16rem' }} id={card.id}>
                            <Image src={card.photo} width={400} height={400}/>
                            <Card.Body className='bg-fuchsia-200 '>
                                <Card.Title className='text-purple-900'>{ card.title }</Card.Title>
                                <Card.Text className='text-purple-900'>{ currencyFormatter.format(card.price) } </Card.Text>
                                <Link href={{
                                    pathname: '/booking',
                                    query: {
                                        price: card.price,
                                        photo: card.photo,
                                        title: card.title,
                                    }
                                }}>
                                    <a><Button variant="primary"> Book </Button></a>
                                </Link>
                            </Card.Body>
                        </Card>       
                    </li>
                                     
                )
            })} 
            </div>
        </ul>

  )
}

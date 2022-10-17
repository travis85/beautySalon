import React from 'react'
import Image from 'next/image'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {cardInfoBraids}  from '../components/CardInfo'
import Link from 'next/link'

export default function braids() {
   
    return (
        <ul>
        <div className='grid grid-cols-3'>
            {cardInfoBraids.map((card) => {
                return (
                    <li key={card.id}>
                        <Card style={{ width: '12rem' }} id={card.id}>
                            <Image src={card.photo} width={200} height={200}/>
                            <Card.Body>
                                <Card.Title>{ card.title }</Card.Title>
                                <Card.Text>{ card.price } </Card.Text>
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

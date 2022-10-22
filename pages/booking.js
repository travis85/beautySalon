import React, { useEffect, useState } from 'react' 
import { useRouter } from 'next/router'
import Image from 'next/image';
import { currencyFormatter } from '../utils/currencyFormatter'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

export default function booking() {
  const router = useRouter();
  const price = router.query.price
  const photo = router.query.photo
  const title = router.query.title


  const [total, setTotal] = useState(0)
  const [items, setItems] = useState([])
  const [stylist, setStylist] = useState('Random')
  const additionalStyling = {
    'Wash and Blow dry:': '40',
    'Highlights:': '60', 
    'Cut Split Ends:': '50',
    'Hot Oil Treatment:': '100'
  }
  
  const add = (price) => {
    setTotal(price + Number(total))
  }
  const subtract = (price) => {
     setTotal(Number(total) - price )
  }
  const addStylestToItems = (name) =>{
     setStylist(name)
     console.log(stylist, 'here', items, name)
    
   
  }

  const addToItems = (price, id) => {
    const itemToAdd = { id: id }
    const isThere = items.some(item => item.id === itemToAdd.id) //USED TO COMPARE OBJECTS AND CHECK IF INSIDE ARRAY
    if (!isThere) {
      setItems([...items, { id: id }])
      add(price)
    } else {
      subtract(price)
      setItems(items => {
        return items.filter(item => item.id !== id)
      })
    }
  }


  useEffect(() => {
    if (!router.isReady) return;
    setTotal(price)
  },[router.isReady])

  return (
    <>
        <div className='m-16 p-8 grid grid-cols-2 place-content-center content-center'>
        <div>
       <Dropdown className=" mb-4">
          <Dropdown.Toggle id="dropdown-autoclose-true">
            Choose Stylist
          </Dropdown.Toggle>
            
            <Dropdown.Menu>
              <Dropdown.Item onClick={()=>addStylestToItems('Random')} id='Jennifer'>Random</Dropdown.Item>
              <Dropdown.Item onClick={()=>addStylestToItems('Jennifer')} id='Jennifer'>Jennifer</Dropdown.Item>
              <Dropdown.Item onClick={()=>addStylestToItems('LouAnn')} id='LouAnn'>LouAnn</Dropdown.Item>
              <Dropdown.Item onClick={()=>addStylestToItems('Mary')} id='Mary'>Mary</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

            <p>Additions:</p>
            <Form>
              {Object.entries(additionalStyling).map(([key, value]) => (
                <div key={`${key}`} className="mb-3">
                  <Form.Check 
                    type={'checkbox'}
                    id={key}
                    label={`${key} $${value}`}
                    onClick={()=>{addToItems(Number(value), key )}}
                  />
                </div>
              ))}
              <Form.Group className="mb-3 w-[50%]" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Additional Details:</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          
          <p><strong>Total:</strong> <span>{currencyFormatter.format(total)}</span></p>
          <Button>Book</Button>
          </div>
          
        <div className='grid place-items-center border-4 border-double border-purple-500/75 shadow-2xl relative'>
          <h2 className=' top-2'>You Have Selected</h2>
            <div className=''>
               <Image src={photo} width={200} height={200} />
            </div>
           <div className='relative'>

            <p className=''>{title}</p>
            <p>Your Stylist will be <span className='text-blue-500'>{stylist}</span></p>
            <ul>
              
              {items.map(item => {
               
                return (
                  <li key={item.id}>
                    {item.id}              
                  </li>
                )
              })}
            </ul>
            
            
          </div>
          
          </div>
        </div> 
        
    </>
  )
}

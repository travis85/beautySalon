import React, { useEffect, useState } from 'react' 
import { useRouter } from 'next/router'
import Image from 'next/image';
import { currencyFormatter } from '../utils/currencyFormatter'
import Form from 'react-bootstrap/Form';

export default function booking() {
  const router = useRouter();
  const price = router.query.price
  const photo = router.query.photo
  const title = router.query.title


  const [total, setTotal] = useState(0)
  const [items, setItems] = useState([])
  const [checkOutList, setCheckOutList] = useState([])

  const additionalStyling = {
    'Wash': '40',
    'Dye': '60', 
    'Cut': '50'
  }
  
  const add = (price) => {
    setTotal(price + Number(total))
  }
  const subtract = (price) => {
     setTotal(Number(total) - price )
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
        <div className='p-4 grid grid-cols-2 justify-center w-[50%]'>
          <div>
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
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
          
          <p><strong>Total:</strong> <span>{currencyFormatter.format(total)}</span></p>
          </div>
          
          <div>
          <Image src={photo} width={200} height={200} />
          <p>{ title }</p>
          </div>
        </div> 
        
    </>
  )
}

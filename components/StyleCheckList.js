import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { currencyFormatter } from '../utils/currencyFormatter'

export default function StyleCheckList() {
    return (
      <div>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Wash" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Dye " />
            </Form.Group>
            <Form.Group className="mb-3 grid " controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Cut" />{currencyFormatter.format('40')}
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
      </div>
    
  )
}

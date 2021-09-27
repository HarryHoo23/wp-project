import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';

const FormPage = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();
    console.log('submit');
  }

  return (
    <Form onSubmit={sendEmail} ref={form}>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Email address</Form.Label>
        <Form.Control type='email' placeholder='Enter email' />
        <Form.Text className='text-muted'>
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control type='password' placeholder='Password' />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBasicCheckbox'>
        <Form.Check type='checkbox' label='Check me out' />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  );
}

export default FormPage;

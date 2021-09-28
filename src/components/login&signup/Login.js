import React, { useRef, useState } from 'react';
import { Form, Card, Button, Alert, Container } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import emailjs from 'emailjs-com';

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(
        emailRef.current.value + '@gmail.com',
        passwordRef.current.value
      );
      var template_params = {
        to_name: 'someone',
        user_name: emailRef.current.value,
      };
      emailjs
        .send(
          'service_r8y8t8g',
          'template_6d3js9m',
          template_params,
          'user_ePbhQ0zjSmeO3JyJIjYUV'
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      history.push('/');
    } catch {
      setError('Failed to Log in');
    }

    setLoading(false);
  }

  return (
    <Container
      className='d-flex align-items-center justify-content-center login-container'
      style={{ minHeight: '100vh' }}
    >
      <div className='w-100' style={{ maxWidth: '400px' }}>
        <Card>
          <Card.Body>
            <h2 className='text-center mb-4'>Log In</h2>
            {error && <Alert variant='danger'>{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id='email'>
                <Form.Label>Username</Form.Label>
                <Form.Control type='text' ref={emailRef} required />
              </Form.Group>
              <Form.Group id='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' ref={passwordRef} />
              </Form.Group>
              <Button disabled={loading} className='w-100' type='submit'>
                Login
              </Button>
            </Form>
            <div className='w-100 text-center mt-3'>
              <Link to='/forgot-password'>Forgot password?</Link>
            </div>
          </Card.Body>
        </Card>
        <div className='w-100 text-center mt-2'>
          Need an account? <Link to='/signup'>Sign Up</Link>
        </div>
      </div>
    </Container>
  );
}

import React, {useRef, useState} from 'react'
import { Form, Card, Button, Alert, Container } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';

export default function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const nameRef = useRef();
    const { signup } = useAuth(); 
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        try {
            setError('');
            setLoading(true);            
            await signup(emailRef.current.value + "@gmail.com", passwordRef.current.value, nameRef.current.value);            
            history.push('/login');
        } catch (err){
            console.log(err);            
            setError(err.message);
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
              <h2 className='text-center mb-4 text-uppercase'>Sign Up</h2>
              {error && <Alert variant='danger'>{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id='name'>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type='name' ref={nameRef} required />
                </Form.Group>
                <Form.Group id='email'>
                  <Form.Label>Username</Form.Label>
                  <Form.Control type='text' ref={emailRef} required />
                </Form.Group>
                <Form.Group id='password'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type='password' ref={passwordRef} />
                </Form.Group>
                <Form.Group id='password-confirm'>
                  <Form.Label>Password Confirmation</Form.Label>
                  <Form.Control type='password' ref={passwordConfirmRef} />
                </Form.Group>
                <Button
                  disabled={loading}
                  className='w-100 login-btn'
                  type='submit'
                >
                  Sign Up
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <div className='w-100 text-center mt-2'>
            Already have an account? <Link to='/login'>Log In</Link>
          </div>
        </div>
      </Container>
    );
}

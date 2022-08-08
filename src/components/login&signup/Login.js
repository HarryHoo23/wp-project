import React, { useRef, useState } from 'react';
import { Form, Card, Button, Alert, Container } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../../assests/logo/Viridian_Logo-coloured.svg';
import emailjs from 'emailjs-com';

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login, errorMessage } = useAuth();
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();
        
        try {            
            setLoading(true);
            await login(
                emailRef.current.value + '@gmail.com',
                passwordRef.current.value
            );            
            var template_params = {
                to_name: 'someone',
                user_name: emailRef.current.value,
            };
            emailjs.send(
                'service_r8y8t8g',
                'template_6d3js9m',
                template_params,
                'user_ePbhQ0zjSmeO3JyJIjYUV'
            )
            .then(() => {
                history.push('/');            
            }).catch(() => {
                console.log("how are you")
            })
            history.push("/");
        } catch {
            console.log("Failed");            
        }
        setLoading(false);
    }

    return (
        <div className="login-page">
        <Container className='d-flex align-items-center justify-content-center login-container vh-100'>
            <div className='w-100' style={{ maxWidth: '500px' }}>
                <img className="w-50 m-auto d-block" src={Logo} alt="viridian logo" />
            <Card>
                <Card.Body className="mt-4">
                    <h2 className='text-center mb-4 text-uppercase'>Login</h2>                
                    {errorMessage !== "" && <Alert variant='danger'>{errorMessage}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id='email'>
                            <Form.Label>Username</Form.Label>
                            <Form.Control type='text' ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' ref={passwordRef} />
                        </Form.Group>
                        <Button disabled={loading} className='w-100 login-btn mt-4' type='submit'>
                            Login
                        </Button>
                    </Form>                    
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2 font-sm'>
                Need an account? <a href='https://viridian-highett.com.au/request-login/' target='_blank'>Request here.</a>
            </div>
            </div>
        </Container>

        </div>
    );
}

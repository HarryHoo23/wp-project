import React, { useState, useEffect } from 'react';
import { Form, Card, Button, Alert, Container } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import Logo from '../../assests/logo/Viridian_Logo-coloured.svg';

export default function Login() {
    const [emailValue, setEmailValue] = useState("");
    const [password, setPassword] = useState("");
    const { login, errorMessage, currentUser } = useAuth();
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();
        
        try {            
            setLoading(true);
            await login(
                emailValue + '@gmail.com',
                password
            );            
            // var template_params = {
            //     to_name: 'someone',
            //     user_name: emailRef.current.value,
            // };
            // emailjs.send(
            //     'service_r8y8t8g',
            //     'template_6d3js9m',
            //     template_params,
            //     'user_ePbhQ0zjSmeO3JyJIjYUV'
            // )
            // .then(() => {
            //     history.push('/');
            // }).catch((error) => {
            //     console.log(error)
            // })
          
        } catch {
            console.log("Failed");            
        }
        setLoading(false);
    }

    useEffect(() => {
        if (currentUser !== null) {
            history.push("/");
        };
    }, [currentUser]);

    const handleChange = (e) => {
        setEmailValue(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
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
                            <Form.Control type='text' onChange={handleChange} required />
                        </Form.Group>
                        <Form.Group id='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' onChange={handlePassword} required />
                        </Form.Group>
                        <Button disabled={loading} className='w-100 login-btn mt-4' type='submit'>
                            Login
                        </Button>
                    </Form>                    
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2 font-sm'>
                <a href='https://viridian-highett.com.au/request-login/' rel="noreferrer" target='_blank'>Request Login</a>
            </div>
            </div>
        </Container>

        </div>
    );
}

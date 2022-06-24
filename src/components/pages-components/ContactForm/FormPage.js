import React, { useRef, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useGlobalContext } from "../../../contexts/GlobalContext";
import emailjs from "emailjs-com";

const FormPage = () => {
    const [validated, setValidated] = useState(false);
    const nameRef = useRef();
    const emailRef = useRef();
    const textAreaRef = useRef();
    const { handleModalClickClose } = useGlobalContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        }

        setValidated(true);
        var template_params = {
            from_name: nameRef.current.value,
            email_address: emailRef.current.value,
            message: textAreaRef.current.value,
        };
        if (form.checkValidity()) {
            emailjs
                .send(
                    "service_r8y8t8g",
                    "template_ym5qrt8",
                    template_params,
                    "user_ePbhQ0zjSmeO3JyJIjYUV"
                )
                .then(
                    (result) => {
                        console.log(result.text);
                        handleModalClickClose();
                    },
                    (error) => {
                        console.log(error.text);
                    }
                );
        } else {
            console.log("error");
        }
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <h1 className="sunday-title text-center pb-5 d-block">Enquiry</h1>
            <Row className="mb-3 mt-5">
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Enter your name"
                        ref={nameRef}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide your name.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom02">
                    <Form.Label>Contact number</Form.Label>
                    <Form.Control
                        required
                        type="tel"
                        placeholder="Enter your phone number"
                        ref={emailRef}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide your phone number.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="12" controlId="Form.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        required
                        ref={textAreaRef}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide your phone number.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Button type="submit">Submit form</Button>
        </Form>
    );
};

export default FormPage;

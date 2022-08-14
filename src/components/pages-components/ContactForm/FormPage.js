import React, { useRef, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
// import { useGlobalContext } from "../../../contexts/GlobalContext";
import emailjs from "emailjs-com";
import { tabContent } from '../../../data/Content';

const FormPage = () => {
    const [validated, setValidated] = useState(false);
    const [hasSent, setHasSent] = useState(false);
    const nameRef = useRef();
    const phoneRef = useRef();
    const emailRef = useRef();
    const [assetValue, setAssetValue] = useState("Showroom");
    // const { handleModalClickClose } = useGlobalContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        }

        setValidated(true);

        const message = `
            Name: ${nameRef.current.value}, \n
            Email: ${emailRef.current.value}, \n
            Phone number: ${phoneRef.current.value},\n
            Interested asset: ${assetValue}
        `

        var template_params = {
            from_name: nameRef.current.value,            
            message: message
        };

        if (form.checkValidity()) {
            emailjs
                .send(
                    "service_l20p6pg",
                    "template_3gu4mx6",
                    template_params,
                    "Y4lLnTLvmrWNZkpKm"
                )
                .then(
                    (result) => {
                        console.log(result.text);
                        setTimeout(() => {
                            setHasSent(true);
                        }, 500);
                    },
                    (error) => {
                        console.log(error.text);
                    }
                );
        } else {
            console.log("error");
        }
    };

    const handleAssetClick = (e) => {
        setAssetValue(e.target.value);
    }

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <h2 className="sunday-title text-center pb-3 d-block">Enquire Now</h2>
            {!hasSent ? (
                <>
                    <Row className="mb-3 mt-5">
                        <Form.Group as={Col} md="12" controlId="validationCustom01">
                            <Form.Label>Name</Form.Label>
                            <Form.Control required type="text" ref={nameRef} />
                            <Form.Control.Feedback type="invalid">
                                Please provide your name.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="12">
                            <Form.Label>Email</Form.Label>
                            <Form.Control required type="text" ref={emailRef} />
                            <Form.Control.Feedback type="invalid">
                                Please provide your email address.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="12" controlId="validationCustom02">
                            <Form.Label>Contact number</Form.Label>
                            <Form.Control required type="tel" ref={phoneRef} />
                            <Form.Control.Feedback type="invalid">
                                Please provide your phone number.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="12" controlId="Form.ControlTextarea1">
                            <Form.Label>Asset class</Form.Label>
                            <select className="w-100 mt-3 py-1" onChange={handleAssetClick}>
                                {tabContent.map((item) => {
                                    return (
                                        <option key={item.title} value={item.title}>{item.title}</option>
                                    )
                                })}
                            </select>
                        </Form.Group>
                    </Row>
                    <Button type="submit" className="w-100 submit-btn">Submit</Button>
                </>
            ) : (
                <p className="my-5">
                    Thank you for your enquiry in Viridian. Someone will be in contact shortly.
                </p>
            )}
        </Form>
    );
};

export default FormPage;

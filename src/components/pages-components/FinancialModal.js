import React from "react";
import { Modal } from "react-bootstrap";
import closeButton from "../../assests/img/icons/close.svg";

const FinancialModal = (props) => {
    return (
        <Modal
            show={props.show}
            onHide={props.onClose}
            backdrop="static"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <div className="modal-content">
                <button className="close" type="button" onClick={props.onClose}>
                    <img src={closeButton} alt="closeModalButton" />
                </button>
                <Modal.Body className="scroll-modal-body">
                    <div className="contact-form-container">
                        {props.children}
                    </div>
                </Modal.Body>
            </div>
        </Modal>
    );
};

export default FinancialModal;

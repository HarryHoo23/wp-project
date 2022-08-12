import React from "react";
import { Modal } from "react-bootstrap";
import closeButton from "../../assests/img/icons/close.svg";
import { useGlobalContext } from "../../contexts/GlobalContext";

const GeneralModal = (props) => {
    const { isModalShow, handleModalClickClose } = useGlobalContext();
    return (
        <Modal
            show={isModalShow.showModal}
            onHide={props.isSiteplan ? () => handleModalClickClose(true) : () => handleModalClickClose(false)}
            backdrop="static"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className={props.className}
        >
            <div className="modal-content">
                <button
                    className="close"
                    type="button"
                    onClick={props.isSiteplan ? () => handleModalClickClose(false) : () => handleModalClickClose(true)}
                >
                    <img src={closeButton} alt="closeModalButton" />
                </button>
                <Modal.Body>{props.renderBodyComponent}</Modal.Body>
            </div>
        </Modal>
    );
};

export default GeneralModal;

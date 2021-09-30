import React from 'react';
import { Modal } from 'react-bootstrap';

import closeButton from '../../../assests/img/icons/close.svg';
import DepreSchedule from '../FinancialTabs/DepreSchedule';
import OwnersCooporation from '../FinancialTabs/OwnersCooporation';
import PriceList from '../FinancialTabs/PriceList';

const UnitModal = (props) => {
  function renderComponent() {
    if (props.number === 1) {
      return <DepreSchedule />;
    } else if (props.number === 2) {
      return <OwnersCooporation />;
    } else {
      return <PriceList />;
    }
  }

  return (
    <Modal
      show={props.onShow}
      onHide={props.onClose}
      backdrop='static'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <div className='modal-content'>
        <button className='close' type='button' onClick={props.onClose}>
          <img src={closeButton} alt='closeModalButton' />
        </button>
        <Modal.Body>
          <div className='contact-form-container'>{renderComponent()}</div>
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default UnitModal;

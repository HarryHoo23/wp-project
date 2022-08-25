import React from 'react';
import { Modal } from 'react-bootstrap';
import PriceListModal from '../FinancialTabs/PriceListModal';
import closeButton from '../../../assests/img/icons/close.svg';
import DepreSchedule from '../FinancialTabs/DepreSchedule';
import OwnersCooporation from '../FinancialTabs/OwnersCooporation';
import EstimateOutgoings from '../FinancialTabs/EstimateOutgoings';
import InvestmentAnalysis from '../FinancialTabs/InvestmentAnalysis';
import FixtureList from '../FixtureList';

const UnitModal = (props) => {
  function renderComponent() {
    if (props.number === 1) {
      return <EstimateOutgoings unit={props.data.unit} data={props.data.estimateOutgoings} unitNumber={props.unitMapIndex} />;
    } else if (props.number === 2) {
      return <OwnersCooporation showFull={true} />;
    } else if (props.number === 3) {
      return <DepreSchedule unit={props.data.unit} data={props.data.depreciationScheduleData} unitNumber={props.unitMapIndex} />;
    } else if (props.number === 4) {
        return <InvestmentAnalysis unitNumber={props.unitNumber} type={props.type} />
    } else if (props.number === 6) {
        return <PriceListModal data={props.price} unitNumber={props.unitMapIndex} />
    } else {
        return <FixtureList {...props.fixture} />
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
        <Modal.Body className={props.className}>
          <div className='contact-form-container'>{renderComponent()}</div>
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default UnitModal;

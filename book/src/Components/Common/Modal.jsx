import React from 'react';
import Modal from 'react-modal';

const TimeSlotModal = ({ children, isOpen, onRequestClose, contentLabel }) => {
  const customStyles = {
    modalContent: {
      
      
      left: '50%',
      top: '50%',
      right:'auto',
      bottom:'auto',
      marginRight:'-50%',
      transform:'translate(-50%,-50%)',
      background:'white'
    },
    overlay: {
      position:'fixed',
      top:0,
      top:0,
      left:0,
      bottom:0,
      backgroundcolor:'rgb(0,0,0,0.7)'
    },
   
  };

  Modal.setAppElement('#root');

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onAfterOpen={() => {}}
        onRequestClose={onRequestClose}
        style={customStyles}
        contentLabel={contentLabel}
      >
        {children}
      </Modal>
    </div>
  );
};

export default TimeSlotModal;
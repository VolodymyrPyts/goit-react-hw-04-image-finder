import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Overlay, Modal } from './Modal.styled';

export const ModalWindow = ({ onClickOverlay, modalImageSrc }) => {
  useEffect(() => {
    const closeModalOnEscKey = e => {
      if (e.code === 'Escape') {
        onClickOverlay();
      }
    };

    window.addEventListener('keydown', closeModalOnEscKey);
    return () => {
      document.removeEventListener('keydown', closeModalOnEscKey);
    };
  }, [onClickOverlay]);

  const handleClickBackdrop = e => {
    if (e.target === e.currentTarget) {
      onClickOverlay();
    }
  };

  return (
    <Overlay onClick={handleClickBackdrop}>
      <Modal src={modalImageSrc} />
    </Overlay>
  );
};

ModalWindow.propTypes = {
  onClickOverlay: PropTypes.func.isRequired,
  modalImageSrc: PropTypes.string.isRequired,
};

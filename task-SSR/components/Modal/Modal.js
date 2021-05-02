import React, { useEffect, useCallback, useRef } from "react";
import ReactDOM from 'react-dom';

import style from "./style.module";

import PropTypes from 'prop-types';

const Modal = (props) => {
  const { isOpen, title, children, clickCloseModal } = props;

  const element = useRef();

  useEffect(() => {
    element.current = document.createElement('div');
    document.body.appendChild(element.current);
    return () => document.body.removeChild(element.current);
  }, []);

  const escCloseModal = useCallback((event) =>{
    if (event.keyCode === 27) {
      clickCloseModal();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escCloseModal, false);
    return () => {
      document.removeEventListener("keydown", escCloseModal, true);
    };
  }, [])

  if (!element.current || !isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <div className={style.modalOverlay} onClick={clickCloseModal}></div>

      <div className={style.modal}>
        <div className={style.modalHeader}>
          <span data-testid="closeButton" className={style.closeBtn}  onClick={clickCloseModal}></span>
          <h2>{title}</h2>
        </div>
        <div className={style.modalContent}>
          {children}
        </div>
      </div>
    </>,
    element.current
  );
}

Modal.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  clickCloseModal: PropTypes.func,
};

export default Modal;

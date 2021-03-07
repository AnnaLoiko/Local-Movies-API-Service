import React, { useEffect } from "react";
import ReactDOM from 'react-dom';
import style from "./style.module";

const Modal = (props) => {
  const { isOpen, title, children, clickCloseModal } = props;

  function escCloseModal(event) {
    if (event.keyCode === 27) {
      clickCloseModal();
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", escCloseModal, false);
  }, [])
  

  return ReactDOM.createPortal(
    <>
      {isOpen &&
        <div className={style.modalOverlay}>
          <div className={style.modal}>
            <div className={style.modalHeader}>
              <span className={style.closeBtn} onClick={clickCloseModal}></span>
              <h2>{title}</h2>
            </div>
            <div className={style.modalContent}>
              {children}
            </div>
          </div>
        </div>
      }
    </>,
    document.getElementById("root")
  );

  // return (
  //   <>
  //     {isOpen &&
  //       <div className={style.modalOverlay}>
  //         <div className={style.modalBody}>
  //           <div className={style.modalHeader}>
  //             <span className={style.closeBtn} onClick={clickCloseModal}></span>
  //             <h2>{title}</h2>
  //           </div>
  //           <div className={style.modalContent}>
  //             {children}
  //           </div>
  //         </div>
  //       </div>
  //     }
  //   </>
  // )
}

export default Modal;
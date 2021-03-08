import React from "react";
import ReactDOM from 'react-dom';
import style from "./style.module";

import PropTypes from 'prop-types';


class Modal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: this.props.isOpen,
      title: this.props.title,
      children: this.props.children,
    };
    this.clickCloseModal = this.props.clickCloseModal.bind(this);
    this.escCloseModal = this.escCloseModal.bind(this);
  }

  escCloseModal(event){
    if (event.keyCode === 27) {
      this.props.clickCloseModal();
    }
  }

  componentDidMount(){
    document.addEventListener("keydown", this.escCloseModal, false);
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.escCloseModal, false);
  }

  render(){

    return ReactDOM.createPortal(
      <>
        {this.props.isOpen &&
          <>
            <div className={style.modalOverlay} onClick={(e) => {this.props.clickCloseModal()}}></div>
            
            <div className={style.modal}>
              <div className={style.modalHeader}>
                <span className={style.closeBtn} onClick={this.props.clickCloseModal}></span>
                <h2>{this.props.title}</h2>
              </div>
              <div className={style.modalContent}>
                {this.props.children}
              </div>
            </div>
          </>
        }
      </>,
      document.getElementById("root")
    );
  }
}

Modal.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  clickCloseModal: PropTypes.func,
};

export default Modal;
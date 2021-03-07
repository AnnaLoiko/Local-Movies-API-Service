import React from "react";
import style from "./style.module.css";

import Button from '@/components/Button/Button';
import Modal from '@/components/Modal/Modal';

class MovieDelete extends React.Component {
  constructor(props) {
    super(props);
    this.clickCloseModal = this.props.clickCloseModal.bind(this);
  }

  render() {
  
    return (
      <Modal
        title="Edit movie"
        isOpen={this.props.isOpen}
        clickCloseModal={this.clickCloseModal}
      >

        <p>Are you sure you want to delete this movie?</p>

        <div className={style.btnWrap}>
          <Button text="Confirm" className="btnPrimary" />
        </div>

      </Modal>
    );
  }
}

export default MovieDelete;
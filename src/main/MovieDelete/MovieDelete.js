import React from "react";
import style from "./style.module.css";

import PropTypes from 'prop-types';

import Button from '@/components/Button/Button';
// import Modal from '@/components/Modal/Modal';
import Modal from '@/components/ModalVar2/Modal';

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

MovieDelete.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  clickCloseModal: PropTypes.func,
  movieId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

export default MovieDelete;
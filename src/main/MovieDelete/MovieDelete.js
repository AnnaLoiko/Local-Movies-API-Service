import React from "react";
import { connect } from 'react-redux';
import style from "./style.module.css";

import PropTypes from 'prop-types';

import Button from '@/components/Button/Button';
import Modal from '@/components/Modal/Modal';

import { deleteMovie } from "@/redux/actions";

const MovieDelete = (props) => {
  const { isOpen, clickCloseModal, deleteMovie, movieId, movie } = props;

  return (
    <Modal
      title="Delete movie"
      isOpen={isOpen}
      clickCloseModal={clickCloseModal}
    >
      <p>Are you sure you want to delete this movie?</p>

      <div className={style.btnWrap}>
        <Button
          text="Confirm"
          className="btnPrimary"
          handleClick={() => deleteMovie(movieId, movie)}
        />
      </div>
    </Modal>
  );
}


MovieDelete.propTypes = {
  isOpen: PropTypes.bool,
  clickCloseModal: PropTypes.func,
  movieID: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};


const mapDispatchToProps = {
  deleteMovie
}

export default connect(null, mapDispatchToProps)(MovieDelete);

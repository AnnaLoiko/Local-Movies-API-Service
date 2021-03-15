import React from "react";
import style from "./style.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import PropTypes from 'prop-types';

import Button from '@/components/Button/Button';
import Modal from '@/components/Modal/Modal';
import Input from '@/components/Input/Input';
import Select from '@/components/Select/Select';

class MovieAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
    this.clickCloseModal = this.props.clickCloseModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    })
  }

  render() {

    return (
      <Modal
        title="Add movie"
        isOpen={this.props.isOpen}
        clickCloseModal={this.clickCloseModal}
      >

        <div className={style.item}>
          <Input
            type="text"
            label="Title"
            placeholder="Title"
          />
        </div>

        <div className={`${style.item} ${style.itemDateWrap}`}>
          <label className={style.label}>Releze data</label>
          <div className={style.itemDate}>
            <DatePicker 
            selected={this.state.startDate} 
            selected={ this.state.startDate }
            onChange={ this.handleChange }
            />
          </div>
        </div>

        <div className={style.item}>
          <Input
            type="text"
            label="Movie URL"
            placeholder="Movie URL here"
          />
        </div>

        <div className={style.item}>
          <Select
            label="Genre"
            placeholder="Select genre"
          />
        </div>

        <div className={style.item}>
          <Input
            type="text"
            label="Overview"
            placeholder="Overview here"
          />
        </div>

        <div className={style.item}>
          <Input
            type="text"
            label="Runtime"
            placeholder="Runtime here"
          />
        </div>

        <div className={style.btnWrap}>
          <Button text="Reset" className="btnPrimaryInvert" />
          <Button text="Submit" className="btnPrimary" />
        </div>

      </Modal>
    );
  }
}

MovieAdd.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  clickCloseModal: PropTypes.func,
  movie: PropTypes.object,
};

export default MovieAdd;
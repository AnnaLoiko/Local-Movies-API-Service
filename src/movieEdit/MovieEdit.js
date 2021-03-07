import React from "react";
import style from "./style.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Button from '@/components/Button/Button';
import Modal from '@/components/Modal/Modal';
import Input from '@/components/Input/Input';
import Select from '@/components/Select/Select';

class MovieEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
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
        title="Edit movie"
        isOpen={this.props.isOpen}
        clickCloseModal={this.clickCloseModal}
      >

        <div className={style.item}>
          <Input
            type="text"
            label="Title"
            placeholder="Title"
            value={this.props.movie.title}
          />
        </div>

        <div className={`${style.item} ${style.itemDateWrap}`}>
          <label className={style.label}>Releze data</label>
          <div className={style.itemDate}>
            <DatePicker
              selected={this.state.startDate}
              selected={this.state.startDate}
              onChange={this.handleChange}
            />
          </div>
        </div>

        <div className={style.item}>
          <Input
            type="text"
            label="Movie URL"
            placeholder="Movie URL here"
            value={this.props.movie.src}
          />
        </div>

        <div className={style.item}>
          <Select
            label="Genre"
            placeholder={this.props.movie.genre}
          />
        </div>

        <div className={style.item}>
          <Input
            type="text"
            label="Overview"
            placeholder="Overview here"
            value={this.props.movie.overview}
          />
        </div>

        <div className={style.item}>
          <Input
            type="text"
            label="Runtime"
            placeholder="Runtime here"
            value={this.props.movie.runtime}
          />
        </div>

        <div className={style.btnWrap}>
          <Button text="Reset" className="btnPrimaryInvert" />
          <Button text="Save" className="btnPrimary" />
        </div>

      </Modal>
    );
  }
}

export default MovieEdit;
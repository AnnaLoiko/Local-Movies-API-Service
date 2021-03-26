import React, { useState } from "react";
import style from "./style.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import PropTypes from 'prop-types';

import Button from '@/components/Button/Button';
import Modal from '@/components/Modal/Modal';
import Input from '@/components/Input/Input';
import MultiSelect from '@/components/MultiSelect/MultiSelect';

import data from '@/data/data';

const MovieAdd = (props) => {
  const { isOpen, clickCloseModal } = props;
  const [selectedGenre, setSelectedGenre] = useState([]);
  const [startDate, setStartDate] = useState(new Date());

  return (
    <Modal
      title="Add movie"
      isOpen={isOpen}
      clickCloseModal={clickCloseModal}
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
            selected={startDate}
            onChange={date => setStartDate(date)}
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
        <MultiSelect
          label="Genre"
          placeholder="Select genre"
          items={data.genreList}
          selectedItems={selectedGenre}
          handleChange={value => setSelectedGenre(value)}
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


MovieAdd.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  clickCloseModal: PropTypes.func,
  movie: PropTypes.object,
};

export default MovieAdd;
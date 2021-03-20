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


const MovieEdit = (props) => {
  const { isOpen, clickCloseModal, movie } = props;
  const [selectedGenre, setSelectedGenre] = useState([...movie.genres]);
  const [startDate, setStartDate] = useState(new Date(movie.release_date));


  return (
    <Modal
      title="Edit movie"
      isOpen={isOpen}
      clickCloseModal={clickCloseModal}
    >

      <div className={style.item}>
        <Input
          type="text"
          label="Title"
          placeholder="Title"
          value={movie.title}
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
          value={movie.poster_path}
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
          value={movie.overview}
        />
      </div>

      <div className={style.item}>
        <Input
          type="text"
          label="Runtime"
          placeholder="Runtime here"
          value={movie.runtime}
        />
      </div>

      <div className={style.btnWrap}>
        <Button text="Reset" className="btnPrimaryInvert" />
        <Button text="Save" className="btnPrimary" />
      </div>

    </Modal>
  );
}


MovieEdit.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  clickCloseModal: PropTypes.func,
  movie: PropTypes.object,
};

export default MovieEdit;
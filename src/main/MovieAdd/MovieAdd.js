import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import style from "./style.module.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import PropTypes from 'prop-types';

import Button from '@/components/Button/Button';
import Modal from '@/components/Modal/Modal';
import Input from '@/components/Input/Input';
import MultiSelect from '@/components/MultiSelect/MultiSelect';

import { addMovie } from "@/redux/actions";


const MovieAdd = (props) => {
  const { isOpen, genresList, clickCloseModal, addMovie } = props;

  const [selectedGenre, setSelectedGenre] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [title, setTitle] = useState('');
  const [runtime, setRuntime] = useState('');
  const [posterPath, setPosterPath] = useState('');
  const [overview, setOverview] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();

    const newMovie = {
      "title": title,
      "release_date": "2021-03-23",
      // "poster_path": posterPath,
      "poster_path": "https://thumbs.dfs.ivi.ru/storage23/contents/7/4/f6e314316d19ec466cba15d66de6df.jpg",
      "overview": overview,
      "runtime": runtime,
      "genres": [
        "Drama",
      ],
    };

    addMovie(newMovie);

    setTitle('');
    setPosterPath('');
    setRuntime('');
    setOverview('');
    setSelectedGenre([]);
  }

  return (
    <Modal
      title="Add movie"
      isOpen={isOpen}
      clickCloseModal={clickCloseModal}
    >
      <form onSubmit={handleSubmit}>

        <div className={style.item}>
          <Input
            type="text"
            label="Title"
            placeholder="Title"
            id="title"
            value={title}
            handleInputChange={event => setTitle(event.target.value)}
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
            id="poster_path"
            value={posterPath}
            handleInputChange={event => setPosterPath(event.target.value)}
            disable="disable"
          />
        </div>

        <div className={style.item}>
          <MultiSelect
            label="Genre"
            placeholder="Select genre"
            items={genresList}
            selectedItems={selectedGenre}
            handleChange={value => setSelectedGenre(value)}
          />
        </div>

        <div className={style.item}>
          <Input
            type="text"
            label="Overview"
            placeholder="Overview here"
            id="overview"
            value={overview}
            handleInputChange={event => setOverview(event.target.value)}
          />
        </div>

        <div className={style.item}>
          <Input
            type="text"
            label="Runtime"
            placeholder="Runtime here"
            id="Runtime"
            value={runtime}
            handleInputChange={event => setRuntime(+event.target.value)}
          />
        </div>

        <div className={style.btnWrap}>
          <Button type="reset" text="Reset" className="btnPrimaryInvert" />
          <Button type="submit" text="Submit" className="btnPrimary" />
        </div>

      </form>
    </Modal>
  );
}


MovieAdd.propTypes = {
  isOpen: PropTypes.bool,
  genresList: PropTypes.array,
  clickCloseModal: PropTypes.func,
  addMovie: PropTypes.func,
};


const mapStateToProps = state => {
  return {
    genresList: state.movies.genresList,
  }
}

const mapDispatchToProps = {
  addMovie
}
export default connect(mapStateToProps, mapDispatchToProps)(MovieAdd);

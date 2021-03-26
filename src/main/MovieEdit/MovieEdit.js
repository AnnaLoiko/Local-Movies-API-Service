import React, { useState } from "react";
import { connect } from "react-redux";

import style from "./style.module.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import PropTypes from 'prop-types';

import Button from '@/components/Button/Button';
import Modal from '@/components/Modal/Modal';
import Input from '@/components/Input/Input';
import MultiSelect from '@/components/MultiSelect/MultiSelect';

import { editMovie } from "@/redux/actions";


const MovieEdit = (props) => {
  const { isOpen, genresList, clickCloseModal, editMovie, movie } = props;
  
  const [selectedGenre, setSelectedGenre] = useState(movie.genres);
  const [startDate, setStartDate] = useState(new Date(movie.release_date));
  const [title, setTitle] = useState(movie.title);
  const [posterPath, setPosterPath] = useState(movie.poster_path);
  const [overview, setOverview] = useState(movie.overview);
  const [runTime, setRunTime] = useState(movie.runtime);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const editedMovie = {
      "id": movie.id,
      "title": title,
      "release_date": startDate,
      "poster_path": posterPath,
      "genres": selectedGenre,
      "overview": overview,
      "runtime": runTime,
    };
    
    editMovie( editedMovie );
    clickCloseModal();
  }

  return (
    <Modal
      title="Edit movie"
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
            type="number"
            id="runtime"
            label="Runtime"
            placeholder="Runtime here"
            value={runTime}
            handleInputChange={event => setRunTime(event.target.value)}
          />
        </div>

        <div className={style.btnWrap}>
          <Button type="reset" text="Reset" className="btnPrimaryInvert" />
          <Button type="submit" text="Save" className="btnPrimary" />
        </div>
      </form>
    </Modal>
  )
};


MovieEdit.propTypes = {
  movie: PropTypes.object,
  isOpen: PropTypes.bool,
  clickCloseModal: PropTypes.func,
  editMovie: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    genresList: state.movies.genresList,
  }
}

const mapDispatchToProps = {
  editMovie
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieEdit);
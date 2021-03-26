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
  const [date, setDate] = useState(new Date());
  const [title, setTitle] = useState('');
  const [runtime, setRuntime] = useState();
  const [posterPath, setPosterPath] = useState('');
  const [overview, setOverview] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();

    // const newMovie = {
    //   "title": title,
    //   "release_date": date,
    //   "poster_path": posterPath,
    //   "overview": overview,
    //   "runtime": runtime,
    //   "genres": [
    //     "Drama",
    //   ],
    // };

    const newMovie = {
      "title": title || 'Some title',
      "release_date": date || "2021-03-23",
      "poster_path": posterPath || 'https://proprikol.ru/wp-content/uploads/2020/07/kartinki-znak-voprosa-4.jpg',
      "overview": overview || 'Some overview',
      "runtime": runtime || 12,
      "genres": [
        "Drama",
      ],
    };

    console.log("ACTION addMovie=========" , newMovie);

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
            id="title"
            label="Title"
            placeholder="Title"
            value={title}
            handleInputChange={event => setTitle(event.target.value)}
          />
        </div>

        <div className={`${style.item} ${style.itemDateWrap}`}>
          <label className={style.label}>Releze data</label>
          <div className={style.itemDate}>
            <DatePicker
              selected={date}
              onChange={date => setDate(date)}
            />
          </div>
        </div>

        <div className={style.item}>
          <Input
            type="text"
            id="poster_path"
            label="Movie URL"
            placeholder="Movie URL here"
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
            id="overview"
            label="Overview"
            placeholder="Overview here"
            value={overview}
            handleInputChange={event => setOverview(event.target.value)}
          />
        </div>

        <div className={style.item}>
          <Input
            type="number"
            id="Runtime"
            label="Runtime"
            placeholder="Runtime here"
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

import React, { useState } from "react";
import style from "./style.module";

import PropTypes from 'prop-types';

import MovieActions from "@/main/MovieList/MovieActions/MovieActions";


const Movie = (props) => {
  const [isShowIcon, setIsShowIcon] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={style.itemWrap}
      onMouseEnter={() => { setIsShowIcon(true) }}
      onMouseLeave={() => { setIsShowIcon(false) }}
    >
      {isShowIcon && <span className={style.iconDropDown} onClick={() => { setIsOpen(true) }}></span>}

      <MovieActions isOpen={isOpen} movie={props.movie} />

      <div className={style.itemImgWrap}>
        <img alt="" src={props.movie.src} />
      </div>

      <div className={style.itemInfo}>
        <h3>{props.movie.title}</h3>
        <p className={style.itemGenre}>{props.movie.genre}</p>
        <span className={style.itemData}>{props.movie.date}</span>
      </div>
    </div>
  );
}

Movie.propTypes = {
  movie: PropTypes.object,
};

export default Movie;

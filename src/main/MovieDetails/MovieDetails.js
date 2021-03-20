import React, { useState, useEffect } from "react";
import style from "./style.module";

import PropTypes from 'prop-types';

// import moviesList from "@/data/moviesList";


const MovieDetails = (props) => {

  // const {movie} = props;
  const movie = moviesList[0];
  return (
    <div className={style.wrap}>
      <div className={style.imgWrap}>
        <img alt="" src={movie.poster_path} />
      </div>

      <div className={style.infoWrap}>
        <div className={style.flex}>
          <h1>{movie.title}</h1>
          <div className={style.rating} title="Movie rating">{movie.vote_average}</div>
        </div>

        <p className={style.addInfo} title="Relese genre">{[...movie.genres].join(", ")}</p>

        <div className={style.flex}>
          <span className={style.itemData} title="Relese date">{movie.release_date}</span>
          <span className={style.itemData} title="Movie duration">{movie.duration}</span>
        </div>

        <div className={style.text}>
          {movie.description}
        </div>
      </div>
    </div>
  );
}

MovieDetails.propTypes = {
  movie: PropTypes.object,
};

export default MovieDetails;

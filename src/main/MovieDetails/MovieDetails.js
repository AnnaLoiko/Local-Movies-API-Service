import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect, useParams } from "react-router-dom";

import style from "./style.module";

import { getMovieById } from "@/redux/actions";

import PropTypes from 'prop-types';


const MovieDetails = (props) => {
  const { getMovieById, errorGetMovieById } = props;
  const {
    id,
    overview = 'Overview will be here',
    genres = [],
    poster_path,
    release_date,
    runtime = '',
    title = 'Movie title',
    vote_average
  } = props.movie;
  
  const releaseDate = release_date ? new Date(release_date).getFullYear() : '';

  const { filmId } = useParams();
  useEffect(() => {
    id === undefined && getMovieById(filmId);
  }, []);


  return (
    <>
    {errorGetMovieById && <Redirect to="/404" />}
    <div className={style.wrap}>
      { id && <>
        <div className={style.imgWrap}>
          <img alt="" src={poster_path} />
        </div>

        <div className={style.infoWrap}>
          <div className={style.flex}>
            <h1>{title}</h1>
            {vote_average > 0 && <div className={style.rating} title="Movie rating">{vote_average}</div>}
          </div>

          <p className={style.addInfo} title="Relese genre">{[...genres].join(", ")}</p>

          <div className={style.flex}>
            {releaseDate && <span className={style.itemData} title="Relese date">{releaseDate}</span>}
            {runtime && <span className={style.itemData} title="Movie duration">{`${runtime} min`}</span>}
          </div>

          <p className={style.text}>
            {overview}
          </p>
        </div>
      </>}
    </div>
    </>
  );
}

MovieDetails.propTypes = {
  movie: PropTypes.object,
};

const mapStateToProps = state => {
  return {
    movie: state.movies.currentMovie,
    errorGetMovieById: state.movies.errorGetMovieById,
  }
}

const mapDispatchToProps = {
  getMovieById
};


export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
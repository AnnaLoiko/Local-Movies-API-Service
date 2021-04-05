import React, { useEffect } from "react";
import { connect } from "react-redux";

import style from "./style.module";

import PropTypes from 'prop-types';
import { getMovieById } from '@/redux/actions';

const MovieDetails = (props) => {
  const { getMovieById } = props;
  const {
    id,
    overview = '',
    genres = [],
    poster_path,
    release_date,
    runtime = 'Runtime, ',
    title = 'Movie title',
    vote_average
  } = props.movie;

  const releaseDate = release_date ? new Date(release_date).getFullYear() : '';

  useEffect(() => { getMovieById(id || 354912) }, [id]);

  return (

    <div className={style.wrap}>
      { id && <>
        <div className={style.imgWrap}>
          <img alt="" src={poster_path} />
        </div>

        <div className={style.infoWrap}>
          <div className={style.flex}>
            <h1>{title}</h1>
            {vote_average && <div className={style.rating} title="Movie rating">{vote_average}</div>}
          </div>

          <p className={style.addInfo} title="Relese genre">{[...genres].join(", ")}</p>

          <div className={style.flex}>
            {releaseDate && <span className={style.itemData} title="Relese date">{releaseDate}</span>}
            <span className={style.itemData} title="Movie duration">{`${runtime} min`}</span>
          </div>

          <p className={style.text}>
            {overview}
          </p>
        </div>
      </>}
    </div>
  );
}

MovieDetails.propTypes = {
  movie: PropTypes.object,
};

const mapStateToProps = state => {
  return {
    movie: state.movies.currentMovie,
  }
}

const mapDispatchToProps = {
  getMovieById
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
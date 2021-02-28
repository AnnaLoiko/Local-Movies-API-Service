import React from "react";
import PropTypes from 'prop-types';

import MovieItem from './MovieItem/MovieItem';

const MovieList = ({ moviesList }) => {
  return (
    <>
     {moviesList.map((movie) => (
       <MovieItem
         title={movie.title}
         genre={movie.genre}
         date={movie.date}
         img={movie.img}
         key={movie.id}
        />
     ))}
    </>
  )
}

MovieList.propTypes = {
  moviesList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      genre: PropTypes.string,
      date: PropTypes.string,
      img: PropTypes.string,
      id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]).isRequired,
    })
  ).isRequired
}

export default MovieList;

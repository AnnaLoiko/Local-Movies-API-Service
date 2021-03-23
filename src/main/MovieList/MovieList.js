import React from "react";
import PropTypes from 'prop-types';

import Movie from './Movie/Movie';

const MovieList = ({ moviesList }) => {
  console.log('moviesList', moviesList);
  return (
    <>
      {moviesList.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </>
  )
}


// MovieList.propTypes = {
//   moviesList: PropTypes.array
// }

export default MovieList;

import axios from 'axios';
import ACTIONS from "./actionTypes";


export const getMovies = (filterKey = 'All') => {
  return (dispatch) => {
    dispatch({ type: ACTIONS.MOVIE_LOADER, payload: true });
    axios.get('http://localhost:4000/movies', { params: {filter: filterKey === 'All' ? '' : filterKey} })
      .then(response => {
        dispatch({ type: ACTIONS.GET_MOVIE_SUCCESS, payloadResponse: response.data, payload: filterKey });
        dispatch({ type: ACTIONS.MOVIE_LOADER, payload: false });
      })
      .catch((error) => {
        dispatch({ type: ACTIONS.GET_MOVIE_ERROR, payload: error });
        dispatch({ type: ACTIONS.MOVIE_LOADER, payload: false });
      })
  }
}

export const addMovie = (movie) => {
  return {
    type: ACTIONS.ADD_MOVIE,
    payload: movie
  }
}


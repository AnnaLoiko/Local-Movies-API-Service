import axios from 'axios';
import ACTIONS from "./actionTypes";

export const getMovies = () => {
  return (dispatch) => {
    axios('http://localhost:4000/movies')
      .then(response => {
        console.log('response getMovies' , response.data);
        dispatch({type: ACTIONS.GET_MOVIE, payload: response.data});
      });
  }
}

export const addMovie = (movie) => {
  console.log('addMovie - payload - movie', movie);
  return {
      type: ACTIONS.ADD_MOVIE,
      payload: movie
  }
}





// export const getMoviesError = (bool) => {
//   return {
//       type: ACTIONS.GET_MOVIE_ERROR,
//       hasError: bool
//   };
// }

// export const getMoviesLoading = (bool) => {
//   return {
//       type: ACTIONS.GET_MOVIE_LOADING,
//       isLoading: bool
//   };
// }

// export const getMoviesSuccess = (items) => {
//   return {
//       type: ACTIONS.GET_MOVIE_SUCCESS,
//       items
//   };
// }


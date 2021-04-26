import axios from 'axios';

import * as api from '../api';
import ACTIONS from "./actionTypes";

export const getMovies = (data = {}) => {
  return (dispatch) => {
    dispatch({ type: ACTIONS.MOVIE_LOADER, payload: true });

    
    return api.getMovies(data)
      .then(response => {
        console.log('!!!!!!!!!!______response:', data)
        console.log('!!!!!!!!!!______response:', response)
        dispatch({
          type: ACTIONS.GET_MOVIE_SUCCESS,
          payloadResponse: response.data.data,
        });
        dispatch({ type: ACTIONS.MOVIE_LOADER, payload: false });
      })
      .catch((error) => {
        dispatch({ type: ACTIONS.GET_MOVIE_ERROR, payload: error });
        dispatch({ type: ACTIONS.MOVIE_LOADER, payload: false });
      })
  }
};

export const addMovie = (newMovie) => {
  return (dispatch) => {
    return axios({
      method: 'POST',
      url: 'http://localhost:4000/movies',
      data: newMovie,
    })
      .then(response => {
        dispatch({
          type: ACTIONS.ADD_MOVIE_SUCCESS,
          payload: {...newMovie, id: response.data.id },
        });
      })
      .catch((error) => {
        dispatch({ type: ACTIONS.ADD_MOVIE_ERROR, payload: error });
      })
  }
};

export const editMovie = (editedMovie) => {
  return (dispatch) => {
    return axios({
      method: 'PUT',
      url: 'http://localhost:4000/movies',
      data: editedMovie,
    })
      .then(response => {
        dispatch({
          type: ACTIONS.EDIT_MOVIE_SUCCESS,
          payload: response.data,
        });
        dispatch({ type: ACTIONS.MOVIE_LOADER, payload: false });
      })
      .catch((error) => {
        dispatch({ type: ACTIONS.EDIT_MOVIE_ERROR, payload: error });
      })
  }
};

export const deleteMovie = (movieId) => {
  return (dispatch) => {
    return axios({
      method: 'DELETE',
      url: `http://localhost:4000/movies/${movieId}`,
      params: {
        id: movieId,
      },
    })
      .then(() => {
        dispatch({
          type: ACTIONS.DELETE_MOVIE_SUCCESS,
          payload: movieId,
        });
      })
      .catch((error) => {
        dispatch({ type: ACTIONS.DELETE_MOVIE_ERROR, payload: error });
      })
  }
};

export const postMessage = () => ({type: ACTIONS.PUT_MESSAGE_ADD_MOVIE_SUCCESS, payload: false });

export const resetSearchData = () => ({type: ACTIONS.RESET_SEARCH_DATA});

export const updateParams = (params) => ({
  type: ACTIONS.UPDATE_PARAMS,
  params,
});

export const resetParams = () => ({
  type: ACTIONS.RESET_PARAMS,
});

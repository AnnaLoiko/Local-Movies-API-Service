import axios from 'axios';
import ACTIONS from "./actionTypes";
import 'cross-fetch/polyfill';


export const getMovies = (data = {}) => {
  return (dispatch) => {
    dispatch({ type: ACTIONS.MOVIE_LOADER, payload: true });

    return axios({
      method: 'GET',
      url: 'http://localhost:4000/movies',
      params: {
        limit: '12',
        filter: (data.filterActiveKey === 'All') ? '' : data.filterActiveKey,
        sortBy: data.sortActiveKey,
        sortOrder: data.sortOrder,
        search: data.search,
        searchBy: data.searchBy,
      },
    })
      .then(response => {
        dispatch({
          type: ACTIONS.GET_MOVIE_SUCCESS,
          payloadResponse: response.data.data,
          payloadParams: {
            filterActiveKey: data.filterActiveKey || 'All',
            sortActiveKey: data.sortActiveKey || 'release_date',
            sortOrder: data.sortOrder,
            search: data.search,
          }
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

export const getMovieById = (movieId) => {
  return (dispatch) => {
    return axios({
      method: 'GET',
      url: `http://localhost:4000/movies/${movieId}`,
      params: {
        id: movieId,
      },
    })
      .then((response) => {
        dispatch({
          type: ACTIONS.GET_MOVIE_BY_ID_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({ type: ACTIONS.GET_MOVIE_BY_ID_ERROR, payload: error});
      })
  }
};

export const postMessage = () => ({type: ACTIONS.PUT_MESSAGE_ADD_MOVIE_SUCCESS, payload: false });

export const resetSearchData = () => ({type: ACTIONS.RESET_SEARCH_DATA});
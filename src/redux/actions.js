import axios from 'axios';
import ACTIONS from "./actionTypes";


export const getMovies = (data = {}) => {
  return (dispatch) => {
    dispatch({ type: ACTIONS.MOVIE_LOADER, payload: true });

    axios({
      method: 'get',
      url: 'http://localhost:4000/movies',
      params: {
        limit: '20',
        filter: (data.filterActiveKey === 'All') ? '' : data.filterActiveKey,
        sortBy: data.sortActiveKey,
        sortOrder: data.sortOrder ? 'asc' : 'desc',
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
    axios({
      method: 'post',
      url: 'http://localhost:4000/movies',
      data: newMovie,
    })
      .then(() => {
        dispatch({
          type: ACTIONS.ADD_MOVIE_SUCCESS,
          payload: newMovie,
        });
      })
      .catch((error) => {
        dispatch({ type: ACTIONS.ADD_MOVIE_ERROR, payload: error });
      })
  }
};

export const editMovie = (editedMovie, id) => {
  console.log('-----------', editedMovie, id);
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'http://localhost:4000/movies',
      data: editedMovie,
    })
    .then(response => {
        dispatch({
          type: ACTIONS.EDIT_MOVIE_SUCCESS,
          payloadResponse: response.data,
          payloadId: id,
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
    axios({
      method: 'delete',
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
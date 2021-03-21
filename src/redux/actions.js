import axios from 'axios';
import ACTIONS from "./actionTypes";


export const getMovies = (data = {}) => {
  return (dispatch) => {
    dispatch({ type: ACTIONS.MOVIE_LOADER, payload: true });
    axios.get('http://localhost:4000/movies', {
      params: {
        limit: '15',
        filter: (data.filterActiveKey === 'All') ? '' : data.filterActiveKey,
        sortBy: data.sortActiveKey,
        sortOrder: data.sortOrder ? 'asc' : 'desc',
      },
    })
      .then(response => {
        dispatch({
          type: ACTIONS.GET_MOVIE_SUCCESS,
          payloadResponse: response.data,
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
}

export const addMovie = (movie) => {
  return {
    type: ACTIONS.ADD_MOVIE,
    payload: movie,
  }
}


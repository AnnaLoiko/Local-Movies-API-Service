import movieReducer from './movieReducer';
import ACTIONS from './actionTypes';


describe('Testing MovieReducer:', () => {

    it('MovieReducer should return the next initial state', () => {
      const initialState = {movies: []}
      expect(movieReducer(initialState, {})).toEqual(initialState)
    })
  
    it('should handle GET_MOVIE', () => {
      const initialState = {movies: []}
      let action = {
        type: ACTIONS.GET_MOVIE_SUCCESS,
        payloadResponse: [{"id": 1,"title": "Some title"}],
        payloadParams: {
          filterActiveKey: "",
          search: "",
          searchBy: "title",
          sortActiveKey: "release_date",
          sortOrder: "",
        }
      };
      expect(movieReducer(initialState, action)).toEqual({
        ...initialState,
        movies: [...action.payloadResponse],
        params: action.payloadParams,
        errorGetMovie: false,
        errorGetMovieById: false,
      })
    })

    it('should handle GET_MOVIE_ERROR', () => {
      const initialState = {movies: []};
      const error = new Error;
      let action = {
        type: ACTIONS.GET_MOVIE_ERROR,
        payload: error,
      };
      expect(movieReducer(initialState, action)).toEqual({
        ...initialState,
        errorGetMovie: true,
      })
    })

    it('should handle ADD_MOVIE', () => {
      const initialState = {movies: []}
      let action = {
        type: ACTIONS.ADD_MOVIE_SUCCESS,
        payload: {"id": 1,"title": "Some title"}
      };
      expect(movieReducer(initialState, action)).toEqual({
        ...initialState,
        movies: [...initialState.movies, action.payload],
        messageAddMovieSucc: true,
        errorAddMovie: false,
      })
    })

    it('should handle ADD_MOVIE_ERROR', () => {
      const initialState = {movies: []};
      const error = new Error;
      let action = {
        type: ACTIONS.ADD_MOVIE_ERROR,
        payload: error,
      };
      expect(movieReducer(initialState, action)).toEqual({
        ...initialState,
        errorAddMovie: true,
      })
    })

    it('should handle DELETE_MOVIE', () => {
      const initialState = {movies: [{id: 1, title: "Title"}]}
      let action = {
        type: ACTIONS.DELETE_MOVIE_SUCCESS,
        payload: 1
      };
      expect(movieReducer(initialState, action)).toEqual({
        ...initialState,
        movies: [],
        errorDeleteMovie: false,
      })
    })

    it('should handle EDIT_MOVIE_ERROR', () => {
      const initialState = {movies: []};
      const error = new Error;
      let action = {
        type: ACTIONS.EDIT_MOVIE_ERROR,
        payload: error,
      };
      expect(movieReducer(initialState, action)).toEqual({
        ...initialState,
        errorEditMovie: true,
      })
    })

    it('should handle EDIT_MOVIE', () => {
      const initialState = {movies: [{id: 1, title: "Title"}]}
      let action = {
        type: ACTIONS.EDIT_MOVIE_SUCCESS,
        payload: {id: 1, title: "Edited movie title"}
      };
      expect(movieReducer(initialState, action)).toEqual({
        ...initialState,
        movies: [{id: 1, title: "Edited movie title"}],
        messageEditMovieSucc: true,
        errorEditMovie: false,
      })
    })

    it('should handle EDIT_MOVIE', () => {
      const initialState = {movies: [{id: 1, title: "Title"}]}
      let action = {
        type: ACTIONS.EDIT_MOVIE_SUCCESS,
        payload: {id: 1, title: "Edited movie title"}
      };
      expect(movieReducer(initialState, action)).toEqual({
        ...initialState,
        movies: [{id: 1, title: "Edited movie title"}],
        messageEditMovieSucc: true,
        errorEditMovie: false,
      })
    })
  })



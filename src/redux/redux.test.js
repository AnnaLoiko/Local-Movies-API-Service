import movieReducer from './movieReducer';
import ACTIONS from './actionTypes';
// import { addMovie } from './actions';
// import expect from 'expect';
// import initialState from './movieReducer';
// import getPostMock from '../mocks/getPostMock';



describe('Testing MovieReducer:', () => {

    let initialState;
    
    beforeEach( () => {
      initialState = {
        movies: [],
        currentMovie: {},
        params: {
          filterActiveKey: '',
          sortActiveKey: 'release_date',
          sortOrder: '',
          search: '',
          searchBy: 'title',
        },
        filterKeys: ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'],
        sortByKeys: [
          { key: "release_date", title: "Release date", sortOrder: "desc", isSelected: false },
          { key: "release_date", title: "Release date", sortOrder: "asc", isSelected: false },
          { key: "vote_average", title: "Rating", sortOrder: "desc", isSelected: false },
        ],
        genresList: ['Documentary', 'Comedy', 'Horror', 'Crime', 'Animation', 'Adventure', 'Family', 'Drama', 'Romance', 'Fantasy', 'Adventure', 'Science Fiction'],
        loader: false,
        messageAddMovieSucc: false,
        messageEditMovieSucc: false,
        errorGetMovie: false,
        errorGetMovieById: false,
        errorAddMovie: false,
        errorEditMovie: false,
        errorDeleteMovie: false,
        errorSearchMovie: false,
      }
    })
  

    it('MovieReducer should return the next initial state', () => {
      expect(movieReducer(undefined, {})).toEqual(initialState)
    })
  
    it('should handle ADD_MOVIE', () => {
      let action = {
        type: ACTIONS.ADD_MOVIE_SUCCESS,
        payload: {
          "id": 1,
          "title": "Some title",
          "release_date": "2018-02-07",
          "poster_path": "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg",
          "overview": "Some overview",
          "genres": ["Drama"],
          "runtime": 120
        }
      };
      expect(movieReducer(initialState, action)).toEqual({
        ...initialState,
        movies: [action.payload],
        messageAddMovieSucc: true,
      })
        // console.log("================", movieReducer(initialState, action));
    })
  })



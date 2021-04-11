import ACTIONS from "./actionTypes";

const initialState = {
  movies: [],
  currentMovie: {},
  params: {
    filterActiveKey: "All",
    sortActiveKey: "release_date",
    sortOrder: '',
  },
  filterKeys: ["All", 'Documentary', 'Comedy', 'Horror', 'Crime'],
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
  
  // not use yet
  errorAddMovie: false,
  errorEditMovie: false,
  errorDeleteMovie: false,
  errorGetMovieById: false,
}

const movieReducer = (state = initialState, action) => {
  switch (action.type) {

    case ACTIONS.MOVIE_LOADER:
      return {
        ...state,
        loader: action.payload,
      };

    case ACTIONS.GET_MOVIE_SUCCESS:
      return {
        ...state,
        movies: action.payloadResponse,
        params: {
          ...state.params,
          ...action.payloadParams,
        },
        errorGetMovie: false,
      };

    case ACTIONS.GET_MOVIE_ERROR:
      return {
        ...state,
        errorGetMovie: true,
      };

    case ACTIONS.DELETE_MOVIE_SUCCESS:
      return {
        ...state,
        movies: state.movies.filter(item => item.id !== action.payload),
        errorDeleteMovie: false,
      };

    case ACTIONS.DELETE_MOVIE_ERROR:
      return {
        ...state,
        errorDeleteMovie: true,
      };

    case ACTIONS.ADD_MOVIE_SUCCESS:
      return {
        ...state,
        movies: [
          { ...action.payload},
          ...state.movies
        ],
        errorAddMovie: false,
        messageAddMovieSucc: true,
      };

    case ACTIONS.PUT_MESSAGE_ADD_MOVIE_SUCCESS:
      return {
        ...state,
        messageAddMovieSucc: action.payload,
      };

    case ACTIONS.ADD_MOVIE_ERROR:
      return {
        ...state,
        errorAddMovie: true,
      };

    case ACTIONS.EDIT_MOVIE_SUCCESS:
      return {
        ...state,
        movies: state.movies.map(
          item =>
            item.id === action.payload.id
              ? { ...item, ...action.payload }
              : item
        ),
        errorEditMovie: false,
        messageEditMovieSucc: true,
      };

    case ACTIONS.EDIT_MOVIE_ERROR:
      return {
        ...state,
        errorEditMovie: true,
      };

    case ACTIONS.GET_MOVIE_BY_ID_SUCCESS:
      return {
        ...state,
        currentMovie: { ...action.payload },
        errorGetMovieById: false,
      };

    case ACTIONS.GET_MOVIE_BY_ID_ERROR:
      return {
        ...state,
        errorGetMovieById: true,
      };

    default:
      return state;

  }
}

export default movieReducer;
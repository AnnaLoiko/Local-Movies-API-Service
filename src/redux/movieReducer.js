import ACTIONS from "./actionTypes";

const initialState = {
  movies: [],
  loader: false,
  filterKeys: ["All", 'Documentary', 'Comedy', 'Horror', 'Crime'],
  sortByKeys: [{ key: "release_date", title: "Release date" }, { key: "vote_average", title: "Rating" }],
  params: {
    filterActiveKey: "All",
    sortOrder: false,
    sortActiveKey: "release_date",
  },
  genresList: ['Documentary', 'Comedy', 'Horror', 'Crime','Animation','Adventure','Family','Drama','Romance','Fantasy','Adventure','Science Fiction'],
  errorGetMovie: false,
  errorAddMovie: false,
  errorEditMovie: false,
  errorDeleteMovie: false,
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
      console.log('reducer DELETE_MOVIE SUCCESS', action.payload);
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
          { ...action.payload, id: Date.now() },
          ...state.movies
        ],
        errorAddMovie: false,
      };

    case ACTIONS.ADD_MOVIE_ERROR:
      return {
        ...state,
        errorAddMovie: true,
      };

    case ACTIONS.EDIT_MOVIE_SUCCESS:
      console.log('item.id ===',  state.movies)
      console.log('action.payloadId ===', action.payloadId)
      return {
        ...state,
        movies: state.movies.map(
          item => 
            item.id === action.payloadId
            ? { ...item, ...action.payloadResponse, ...action.payloadId }
            : item
        ),
        errorEditMovie: false,
      };

    case ACTIONS.EDIT_MOVIE_ERROR:
      return {
        ...state,
        errorEditMovie: true,
      };

    default:
      return state;

  }
}

export default movieReducer;
import ACTIONS from "./actionTypes";

const initialState = {
  movies: [],
  hasError: false,
  loader: false,
  filterKeys: ["All", 'Documentary', 'Comedy', 'Horror', 'Crime'],
  sortByKeys: [{ key: "release_date", title: "Release date" }, { key: "vote_average", title: "Rating" }],
  params: {
    filterActiveKey: "All",
    sortOrder: false,
    sortActiveKey: "release_date",
  },
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
        movies: action.payloadResponse.data,
        params: {
          ...state.params,
          ...action.payloadParams,
        },
        hasError: false,
      }

    case ACTIONS.GET_MOVIE_ERROR:
      return {
        ...state,
        hasError: true,
      };

    case ACTIONS.ADD_MOVIE_SUCCESS:
      console.log('reducer ADD_MOVIE SUCCESS', action.payload);
      return {
        ...state,
        movie: action.payload,
        hasError: false,
      }

    case ACTIONS.ADD_MOVIE_ERROR:
      console.log('reducer ADD_MOVIE ERROR reducer', action.payload);
      return {
        ...state,
        hasError: true,
      }

    default:
      return state;
  }
}

export default movieReducer;
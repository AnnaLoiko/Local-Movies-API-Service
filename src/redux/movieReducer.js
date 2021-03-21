import ACTIONS from "./actionTypes";

const initialState = {
  movies: [],
  hasError: false,
  loader: false,
  filterKeys: ["All",'Documentary','Comedy','Horror','Crime',],
  activeFilter: "All",
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
        activeFilter: action.payload,
        hasError: false,
      }

    case ACTIONS.GET_MOVIE_ERROR:
      return {
        ...state,
        hasError: true,
      };

    case 'ADD_MOVIE':
      console.log('reducer ADD_MOVIE reducer', action.payload);
      return {
        ...state,
        movie: action.payload
      }

    default:
      return state;
  }
}

export default movieReducer;
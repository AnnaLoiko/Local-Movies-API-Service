const initialState = {
  movies: [],
}

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MOVIE':
      console.log('GET_MOVIE reducer', action.payload.data);
      return {
        ...state,
        movies: action.payload.data
      }

    case 'ADD_MOVIE':
      console.log('ADD_MOVIE reducer', action.payload);
      return {
        ...state,
        movie: action.payload
      }
    
    default:
      return state;
  }
}

export default movieReducer;
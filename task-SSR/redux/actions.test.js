import configureMockStore from 'redux-mock-store'
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import * as actions from './actions';
import ACTIONS from './actionTypes';
import * as axios from "axios";
import 'regenerator-runtime/runtime';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('ASYNC actions:', () => {
  let mock;
  beforeEach(() => {
    mock = new MockAdapter(axios);
  })
  afterEach(() => {
    mock.restore()
  })

  it('should create an action getMovies', () => {
    mock.onGet('http://localhost:4000/movies').reply(200, {
      data: [{id: 1, title: "movie title"}],
    });

    const expectedAction = [
      { type: ACTIONS.MOVIE_LOADER, payload: true },
      {
        type: ACTIONS.GET_MOVIE_SUCCESS,
        payloadResponse: [{id: 1, title: "movie title"}],
        payloadParams: {
          filterActiveKey: 'All',
          sortActiveKey: 'release_date',
          sortOrder: undefined,
          search: undefined
        }
      },
      { type: ACTIONS.MOVIE_LOADER, payload: false }
    ]

    const store = mockStore({ movies: [] })

    return store.dispatch(actions.getMovies()).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedAction)
    })
  });

  it('should create an action addMovie', () => {
    mock.onPost('http://localhost:4000/movies').reply(200, {id: 2, title: "New movie title"},);

    const expectedAction = [
      {
        type: ACTIONS.ADD_MOVIE_SUCCESS,
        payload: {id: 2, title: "New movie title"}
      },
    ]

    const store = mockStore({ movies: [{id: 1, title: "Movie title"}] })

    return store.dispatch(actions.addMovie({id: 2, title: "New movie title"})).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedAction)
    })
  });

  it('should create an action editMovie', () => {
    mock.onPut('http://localhost:4000/movies').reply(200, {id: 1, title: "Edited movie title"},);

    const expectedAction = [
      {
        type: ACTIONS.EDIT_MOVIE_SUCCESS,
        payload: {id: 1, title: "Edited movie title"}
      },
      { type: ACTIONS.MOVIE_LOADER, payload: false }
    ]

    const store = mockStore({ movies: [{id: 1, title: "Movie title"}] })

    return store.dispatch(actions.editMovie({id: 1, title: "Edited movie title"})).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedAction)
    })
  });

  it('should create an action deleteMovie', () => {
    const movieId = 1;
    mock.onDelete(`http://localhost:4000/movies/${movieId}`).reply(200, movieId);

    const expectedAction = [
      {
        type: ACTIONS.DELETE_MOVIE_SUCCESS,
        payload: movieId,
      },
    ]

    const store = mockStore({ movies: [{id: movieId, title: "movie title"}] })

    return store.dispatch(actions.deleteMovie(movieId)).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedAction)
    })
  });
})


describe('Sync actions:', () => {
  it('should create an action postMessage', () => {
    const payload = false;
    const expectedAction = {
      type: ACTIONS.PUT_MESSAGE_ADD_MOVIE_SUCCESS,
      payload
    }
    expect(actions.postMessage(payload)).toEqual(expectedAction)
  })

  it('should create an action resetSearchData', () => {
    const expectedAction = {
      type: ACTIONS.RESET_SEARCH_DATA,
    }
    expect(actions.resetSearchData()).toEqual(expectedAction)
  })
})

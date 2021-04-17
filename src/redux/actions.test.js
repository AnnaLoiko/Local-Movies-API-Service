import configureMockStore from 'redux-mock-store'
import { render, waitFor, cleanup } from '@testing-library/react';
import { Thunk } from 'redux-testkit';
import movieReducer from './movieReducer';

import mockAxios from 'jest-mock-axios';

import thunk from 'redux-thunk';
import * as actions from './actions';
import ACTIONS from './actionTypes';
import fetchMock from 'fetch-mock';
import * as axios from "axios";
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

import 'regenerator-runtime/runtime';


describe('ASYNC actions____________________:', () => {

  afterEach(() => {
    fetchMock.restore()
  })

  it('should create an action getMovies', () => {
    
    fetchMock.getOnce('/movies', {
      payloadResponse: { movies: [] },
      payloadParams: {}
    })

    // console.log(
    //   "================", 
    //   fetchMock.getOnce('/movies', {
    //     payloadResponse: { movies: [] },
    //     payloadParams: {}
    //   })
    // )

    const expectedAction = [
      { type: ACTIONS.MOVIE_LOADER, payload: true },
      { 
        type: ACTIONS.GET_MOVIE_SUCCESS,
        payloadResponse: { movies: [] },
        payloadParams: {}
      },
      { type: ACTIONS.MOVIE_LOADER, payload: false }
    ]
    
    const store = mockStore({ movies: [] })

    return store.dispatch(actions.getMovies()).then(() => {
      const actions = store.getActions()
      expect(actions[1].type).toEqual(expectedAction[1].type)
      expect(actions[0]).toEqual(expectedAction[0])
      expect(actions[2]).toEqual(expectedAction[2])
      // expect(actions).toEqual(expectedAction)
    })
  })

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


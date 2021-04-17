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
import MockAdapter from 'axios-mock-adapter';
const mockStore = configureMockStore(middlewares);


import 'regenerator-runtime/runtime'

describe('ASYNC actions:', () => {
    
    it("getMovies() should dispatch successful action", async () => {

    });


})




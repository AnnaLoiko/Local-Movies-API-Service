import React from "react";
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducer from '@/redux/reducer'

import HomePage from '@/pages/HomePage';
import MoviePage from '@/pages/MoviePage';


const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk, logger)
  )
);

const App = () => {
  return (
    <Provider store={store}>
      <HomePage />
      {/* <MoviePage /> */}
    </Provider>
  )
}

export default App;
import React from 'react';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";

import '@/styles/globals.css';

import reducer from "@/redux/reducer";

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;

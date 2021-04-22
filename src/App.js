import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";

import reducer from "@/redux/reducer";

import HomePage from "@/pages/HomePage";
import MoviePage from "@/pages/MoviePage";
import ErrorPage from "@/pages/ErrorPage";

import ScrollToTop from "@/components/Layout/ScrollToTop";


const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);


const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path='/search/Search:Query' component={HomePage} />
          <Route path="/film/:filmId" component={MoviePage} />
          <Route path="*" component={ErrorPage} />
        </Switch>
      </Router>
    </Provider>
  );
};


export default App;
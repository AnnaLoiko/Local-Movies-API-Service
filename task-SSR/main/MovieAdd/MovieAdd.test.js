
import React from 'react';
import { Provider } from 'react-redux';
import regeneratorRuntime from "regenerator-runtime";
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import configureStore from 'redux-mock-store';
const mockStore = configureStore([]);

import MovieAdd from "./MovieAdd.js";

describe('MovieAdd form', () => {

  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      movies: [],
      params: {},
    });

    component = render(
      <Provider store={store}>
        <MovieAdd isOpen={true} />
      </Provider>
    );
  });

  it('Find elements input Title by placeholder', () => {
    expect(screen.getByPlaceholderText('Title')).toBeInTheDocument();
  });

  it('Find elements input Overview by placeholder', () => {
    expect(screen.getByPlaceholderText('Overview here')).toBeInTheDocument();
  });

  it('Search - userEvent', () => {
    userEvent.type(screen.getByPlaceholderText('Title'), "Some title");
    expect(screen.getByDisplayValue("Some title")).toBeInTheDocument();
  });
});

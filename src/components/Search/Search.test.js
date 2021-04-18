import React from "react";
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import configureStore from 'redux-mock-store';
const mockStore = configureStore([]);
import userEvent from '@testing-library/user-event';

import Search from "./Search";

describe('Search  /  Connected React-Redux Component Search: ', () => {

    let store;
    let component;
   
    beforeEach(() => {
      store = mockStore({
        movies: [],
        params: {},
      });
  
      component = render(
        <Provider store={store}>
          <Search value="" />
        </Provider>
      );
    });

    it('Should render snapshot Search component', () => {
        const { asFragment } = component;
        expect( asFragment(<Search />) ).toMatchSnapshot();
    });

    it('Find elements input Search by placeholder', () => {
      expect(screen.getByPlaceholderText('What do you want to watch?')).toBeInTheDocument();
    });

    it('Search - userEvent', () => {
        userEvent.type(screen.getByRole('textbox'), "Javascript");
        expect(screen.getByDisplayValue("Javascript")).toBeInTheDocument();
    });


})
import React from "react";
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import * as actions from '@/redux/actions';

import renderer from 'react-test-renderer';

import configureStore from 'redux-mock-store';
const mockStore = configureStore([]);
import userEvent from '@testing-library/user-event';

import Search from "./Search";
// import ACTIONS from "../../redux/actionTypes";

describe('Search  /  Connected React-Redux Component Search: ', () => {

    let store;
    let component;
    let onChangeMock;
   
    beforeEach(() => {
      store = mockStore({
        movies: [],
        params: {},
      });


      onChangeMock = jest.fn();
   
      component = render(
        <Provider store={store}>
          <Search value="" onChange={onChangeMock} />
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








    // it('Calls the onChange callback handler', () => {
    //     userEvent.type(screen.getByRole('textbox'), "Javascript");
    //     expect(onChangeMock).toHaveBeenCalledTimes(1);
    // });

   
    // it('should dispatch an action on button click', () => {

    //     const testRenderer = renderer.create(
    //         <Provider store={store}>
    //         <Search value="" onChange={onChange} />
    //       </Provider>
    //       );
    //       const testInstance = testRenderer.root;

    //     renderer.act(() => {
    //         testInstance.findByType('button').props.onClick();
    //     });
     
    //     expect(store.dispatch).toHaveBeenCalledTimes(1);
    //     expect(store.dispatch).toHaveBeenCalledWith(
    //         actions.getMovies({ payload: "Javascript" })
    //     );
    // });
})
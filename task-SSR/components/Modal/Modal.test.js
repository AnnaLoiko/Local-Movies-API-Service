import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import 'regenerator-runtime/runtime';

import ReactDOM from 'react-dom';

import Modal from "./Modal";

describe('Modal windows:', () => {
    test('Modal shows the children and a close button', async () => {
        const handleClose = jest.fn();
    
        render(<Modal clickCloseModal={handleClose} isOpen={true} />);

        const closeButton = screen.findByTestId('closeButton');
    
        expect(await closeButton).toBeTruthy()

        userEvent.click(await closeButton);

        expect(handleClose).toHaveBeenCalledTimes(1);
    });
});
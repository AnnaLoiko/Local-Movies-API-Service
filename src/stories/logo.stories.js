import React from 'react';
import './logo.css';

import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';


export default {
    title: 'Example/Logo',
    component: Logo,
    decorators: [withKnobs],
};

export const Logo = () => (
    <a 
    className='logo'
    to="/"
    >
    <strong>netflix</strong>roulette
    </a>
);

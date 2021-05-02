import React from 'react';

import Input from "@/components/Input/Input";

import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';


export default {
  title: 'Example/Input',
  component: Input,
  decorators: [withKnobs],
};

export const textInput = () => (
  <Input type={text('type', 'text')} placeholder={text('placeholder', 'Title here')} />
);

export const numberInput = () => (
  <Input type={text('type', 'number')} placeholder={text('placeholder', 'Range here')} />
);

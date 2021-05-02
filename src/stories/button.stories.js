import React from 'react';

import Button from "@/components/Button/Button";

import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';


export default {
  title: 'Example/Button',
  component: Button,
  decorators: [withKnobs],
};

export const button = () => (
  <Button type={text('type', 'text')} />
);

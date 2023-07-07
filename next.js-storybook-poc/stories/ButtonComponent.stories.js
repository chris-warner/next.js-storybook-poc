import React from 'react';
import ButtonComponent from '../components/ButtonComponent';
import { action } from '@storybook/addon-actions';

export default {
  title: 'ButtonComponent',
  component: ButtonComponent,
};

const Template = (args) => <ButtonComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  onClick: action('Button Clicked'),
};


export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
};

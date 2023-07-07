import React from 'react';
import HelloWorld from '../components/HelloWorld';

export default {
  title: 'HelloWorld',
  component: HelloWorld,
  argTypes: {
    text: { control: 'text' },
    style: { control: 'object' },
  },
};

const Template = (args) => <HelloWorld {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Hello, World!',
  style: { color: 'black', fontSize: '16px' },
};

export const RedText = Template.bind({});
RedText.args = {
  text: 'Hello, World!',
  style: { color: 'red' },
};
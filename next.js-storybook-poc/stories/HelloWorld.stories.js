import React from 'react';
import HelloWorld from '../components/HelloWorld';

export default {
  title: 'HelloWorld',
  component: HelloWorld,
};

const Template = (args) => <HelloWorld {...args} />;

export const Default = Template.bind({});
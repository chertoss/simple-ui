import React from 'react';
import { storiesOf } from '@storybook/react';
import { Input } from './Input';

const stories = storiesOf('Storybook Input', module);

stories.add('with a Input', () => {
  return <Input />;
});

stories.add('with a textarea', () => {
  return <Input type="textarea" />;
});

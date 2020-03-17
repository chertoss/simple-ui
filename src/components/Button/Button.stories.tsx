import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from './Button';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';

const stories = storiesOf('Storybook Knobs', module);
stories.addDecorator(withKnobs);

stories.add('with a button', () => {
  return (
    <Button onClick={action('clicked')} isDisabled={boolean('isDisabled', true)}>
      Hello Button
    </Button>
  );
});

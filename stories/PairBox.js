import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { PairBox } from '../src/components/PairBox/PairBox';

const stories = storiesOf('Pair Box', module);

stories.addDecorator(withKnobs);

stories
  .add('Pair', () => {
    const aspectRatio = number('aspectRatio', 3);
    const background = text('background', 'red');
    const radius = number('radius', 5);
    const width = text('width', '500px');

    return (
      <PairBox
        aspectRatio={aspectRatio}
        background={background}
        radius={radius}
        width={width}
      />
    );
  });

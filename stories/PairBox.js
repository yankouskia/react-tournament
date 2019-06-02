import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { PairBox } from '../src/components/PairBox/PairBox';
import { Provider } from '../src/components/Provider';

const stories = storiesOf('Pair Box', module);

stories.addDecorator(withKnobs);

stories
  .add('Pair', () => {
    const aspectRatio = number('aspectRatio', 3);
    const background = text('background', 'red');
    const index = number('index', 13);
    const radius = number('radius', 5);
    const width = text('width', '250px');
    const pair = [{
      score: 35,
      user: 'Alex',
    }, {
      score: 43,
      user: 'Yankouski',
    }]

    return (
      <Provider>
        <PairBox
          aspectRatio={aspectRatio}
          background={background}
          index={index}
          pair={pair}
          radius={radius}
          width={width}
        />
      </Provider>
    );
  });

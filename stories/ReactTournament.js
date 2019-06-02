import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import { ReactTournament } from '../src/components/ReactTournament';
import { data } from './test-columns';

const stories = storiesOf('ReactTournament', module);

stories.addDecorator(withKnobs);

stories
  .add('default', () => {
    const aspectRatio = number('aspectRatio', 2);
    const width = text('width', 'auto');

    return (
      <ReactTournament
        aspectRatio={aspectRatio}
        data={data}
        width={width}
      />
    );
  })
  .add('restricted width', () => {
    const aspectRatio = number('aspectRatio', 2);
    const width = text('width', '600px');

    return (
      <ReactTournament
        aspectRatio={aspectRatio}
        data={data}
        width={width}
      />
    );
  })
  .add('more rounds', () => {
    const aspectRatio = number('aspectRatio', 2);
    const width = text('width', 'auto');

    const customData = [...data];
    customData.unshift([...data[0], ...data[0]]);
    customData.unshift([...data[0], ...data[0], ...data[0], ...data[0]]);
    customData.unshift([...data[0], ...data[0], ...data[0], ...data[0], ...data[0], ...data[0], ...data[0], ...data[0]]);

    return (
      <ReactTournament
        aspectRatio={aspectRatio}
        data={customData}
        width={width}
      />
    );
  })
  .add('aspect ratio = 3', () => {
    const aspectRatio = number('aspectRatio', 3);
    const width = text('width', 'auto');

    const customData = [...data];
    customData.unshift([...data[0], ...data[0]]);
    customData.unshift([...data[0], ...data[0], ...data[0], ...data[0]]);
    customData.unshift([...data[0], ...data[0], ...data[0], ...data[0], ...data[0], ...data[0], ...data[0], ...data[0]]);

    return (
      <ReactTournament
        aspectRatio={aspectRatio}
        data={customData}
        width={width}
      />
    );
  });

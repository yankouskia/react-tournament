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
  })
  .add('custom theme', () => {
    const aspectRatio = number('aspectRatio', 3);
    const width = text('width', 'auto');
    const theme = {
      primary: {
        default: '#ffee58',
        dark: '#fdd835',
        darkest: '#f9a825',
        light: '#fff59d',
      },
      success: {
        default: '#ab47bc',
        dark: '#8e24aa',
        darkest: '#6a1b9a',
        light: '#ce93d8',
      },
      fail: {
        default: '#8d6e63',
        dark: '#6d4c41',
        darkest: '#3e2723',
        light: '#bcaaa4',
      },
      textSmall: '10px',
      textMedium: '14px',
      textLarge: '20px',

      textDark: '#1a237e',
      textLight: '#b2ff59',
    };

    const customData = [...data];
    customData.unshift([...data[0], ...data[0]]);
    customData.unshift([...data[0], ...data[0], ...data[0], ...data[0]]);
    customData.unshift([...data[0], ...data[0], ...data[0], ...data[0], ...data[0], ...data[0], ...data[0], ...data[0]]);

    return (
      <ReactTournament
        aspectRatio={aspectRatio}
        data={customData}
        theme={theme}
        width={width}
      />
    );
  });

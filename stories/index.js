import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';
import { Pair } from '../src/components/Pair';
import { Svg } from '../src/components/Svg';

storiesOf('Button', module)
  .add('with text', () => (
    <Button>Hello Button</Button>
  ))
  .add('with emoji', () => (
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ))
  .add('Pair', () => (
    <Svg>
      <Pair><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Pair>
    </Svg>
  ));

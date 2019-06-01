import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { Table } from '../src/components/Table/Table';
import { data } from './test-columns';

const stories = storiesOf('Table', module);

stories.addDecorator(withKnobs);

stories
  .add('Table', () => {

    return (
      <Table
        data={data}
      />
    );
  });

import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/PairBox.js');
  require('../stories/Table.js');
}

configure(loadStories, module);

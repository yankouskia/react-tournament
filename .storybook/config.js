import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/PairBox.js');
}

configure(loadStories, module);

import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/PairBox.js');
  require('../stories/ReactTournament.js');
}

configure(loadStories, module);

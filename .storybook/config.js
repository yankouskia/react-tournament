import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/ReactTournament.js');
}

configure(loadStories, module);

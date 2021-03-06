import { setOptions, withOptions } from '@storybook/addon-options';
import { addDecorator } from '@storybook/react';

setOptions({
  name: 'My Storybook',
  url: 'https://example.com',
  goFullScreen: false,
  showStoriesPanel: false,
  showAddonPanel: false,
  showSearchBox: false,
  addonPanelInRight: false,
  sortStoriesByKind: false,
  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/,
  selectedAddonPanel: 'storybook/actions/action-panel',
});

setOptions({
  name: 'My Storybook - deprecated options',
  url: 'https://example.com',
  goFullScreen: false,
  showLeftPanel: false,
  showDownPanel: false,
  showSearchBox: false,
  downPanelInRight: false,
  sortStoriesByKind: false,
  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/
});

setOptions({
  hierarchySeparator: '.',
  hierarchyRootSeparator: '#',
});

addDecorator(
    withOptions({
        name: "My Storybook",
        url: "https://example.com",
        goFullScreen: false,
        showStoriesPanel: false,
        showAddonPanel: false,
        showSearchBox: false,
        addonPanelInRight: false,
        sortStoriesByKind: false,
        hierarchySeparator: /\//,
        hierarchyRootSeparator: /\|/,
        selectedAddonPanel: "storybook/actions/action-panel"
    })
);

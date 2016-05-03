import React from 'react';
import MainForm from '../MainForm.jsx';
import { storiesOf, action } from '@kadira/storybook';

function getItem(params) {
  return (
    <MainForm actions={params} />
  );
}
storiesOf('MainForm', module)
  .add('default view', () => {
    const actions = {
      saveProduct: () => {
        // action('button click, saveProduct call');
        console.log ('button click, saveProduct call');
      }
    }
    return getItem(actions);
  });

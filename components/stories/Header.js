import React from 'react';
import Header from '../Header.jsx';
import { storiesOf } from '@kadira/storybook';

storiesOf('Header', module)
  .add('default view', () => {
    return (
      <Header />
    );
  });

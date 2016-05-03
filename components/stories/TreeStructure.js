import React from 'react';
import TreeStructure from '../TreeStructure.jsx';
import { storiesOf } from '@kadira/storybook';

function getItem(params) {
  return (
    <TreeStructure products={params} />
  );
}

storiesOf('TreeStructure', module)
  .add('default view', () => {
    return getItem({});
  })
  .add('with single product', () => {
    const products = {
      'unilever' : {
        'dove': {
          'axe': [
            '5/3/2016 14:07:59'
          ]
        }
      }
    }
    return getItem(products);
  })

  .add('with single product, multiple submissions', () => {
    const products = {
      'unilever' : {
        'dove': {
          'axe': [
            '5/3/2016 14:07:59',
            '5/3/2016 14:08:59'
          ]
        }
      }
    }
    return getItem(products);
  })

  .add('with multiple advertisers, products, submissions', () => {
    const products = {
      'unilever' : {
        'dove': {
          'axe': [
            '5/3/2016 14:07:45',
            '5/3/2016 14:08:52'
          ]
        }
      },
      'Mars, Inc' : {
        'Confectionery': {
          'Milky Way': [
            '5/3/2016 14:03:39',
            '5/3/2016 14:04:59'
          ]
        }
      }
    }
    return getItem(products);
  });

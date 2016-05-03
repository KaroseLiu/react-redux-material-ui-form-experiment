import expect from 'expect'
import products from '../../reducers/products'
import * as types from '../../constants/ActionTypes'

describe('features reducer', () => {

  it('should handle initial state', () => {
    expect(
      products(undefined, {})
    ).toEqual(
      {
      }
    )
  });

  it('should handle SAVE_PRODUCT', () => {
    expect(
      products({}, {
        type: types.SAVE_PRODUCT,
        advertiser: 'Unilever',
        brand: 'Dove',
        product: 'Axe',
        datetime: '5/3/2016 14:07:59'
      })
    ).toEqual(
      {
        'Unilever' : {
          'Dove' : {
            'Axe': [
              '5/3/2016 14:07:59'
            ]
          }
        }

      }
    )

  });
});

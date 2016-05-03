import expect from 'expect';
import * as types from '../../constants/ActionTypes'
import * as productActions from '../../actions/products'
import moment from 'moment';
describe('products actions', () => {

  it('saveProduct should create SAVE_PRODUCT action', () => {
    expect(productActions.saveProduct('Unilever', 'Dove','Axe')).toEqual({
      type: types.SAVE_PRODUCT,
      advertiser: 'Unilever',
      brand: 'Dove',
      product: 'Axe',
      datetime: moment().format('l H:mm:ss')
    })
  });

})

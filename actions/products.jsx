import * as types from '../constants/ActionTypes';
import moment from 'moment';
export function saveProduct(advertiser, brand, product, ) {
  return {
    type: types.SAVE_PRODUCT,
    advertiser,
    brand,
    product,
    datetime: moment().format('l H:mm:ss')
  };
}

import { SAVE_PRODUCT } from '../constants/ActionTypes';
import _ from 'lodash';

const initialState = {
};

export default function products(state = initialState, action) {
  switch (action.type) {
  case SAVE_PRODUCT:

    // prepare selector for convenient picking with lodash's _.get
    const productSelector = action.advertiser + '.' + action.brand + '.' + action.product;

    // get the product slice of state or create path if it doesn't exist
    const productTimeSlice = _.get(state, productSelector, [])

    // add a time entry
    const exists = _.indexOf(productTimeSlice, action.datetime);
    if (exists === -1)
      productTimeSlice.push(action.datetime);

    const newState = _.merge(state, {
      [action.advertiser] : {
        [action.brand] : {
          [action.product] : productTimeSlice
        }
      }
    });

    return {
      ...newState
    }

  default:
    return state;
  }
}

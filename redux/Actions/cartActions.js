import { ADD_TO_CART ,REMOVE_FROM_CART ,PAYMENT} from '../types';




export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});


export const removeFromCart = (itemId) => ({
  type: REMOVE_FROM_CART,
  payload: itemId,
});


export const payment = (item) => ({
  type: PAYMENT,
  payload: item,
});
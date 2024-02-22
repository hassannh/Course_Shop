import { ADD_TO_CART ,REMOVE_FROM_CART ,PAYMENT,REMOVE_FROM_CATALOGUE} from '../types';




export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});


export const removeFromCart = (itemId) => ({
  type: REMOVE_FROM_CART,
  payload: itemId,
});


export const removeFromcatalogue = (itemId) => ({
  type: REMOVE_FROM_CATALOGUE,
  payload: itemId,
});


export const payment = (item) => ({
  type: PAYMENT,
  payload: item,
});
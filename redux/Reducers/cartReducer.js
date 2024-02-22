import {ADD_TO_CART,REMOVE_FROM_CART,PAYMENT,REMOVE_FROM_CATALOGUE} from '../types'


const initialState = {
  
    cartItems: [],
    catalogue: []
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };

        case REMOVE_FROM_CART:
          return {
            ...state,
            cartItems: state.cartItems.filter((item) => item.id !== action.payload),
          };

          case REMOVE_FROM_CATALOGUE:
          return {
            ...state,
            catalogue: state.catalogue.filter(item => item.id !== action.payload),
          };
          
          case PAYMENT:
          return {
            ...state,
            cartItems: [...state.cartItems, action.payload]
          };
      default:
        return state;
    }
  };
  
  export default cartReducer;

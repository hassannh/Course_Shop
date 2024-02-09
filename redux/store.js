import { createStore } from 'redux';
import rootReducer from './Reducers/cartReducer'; 

const store = createStore(rootReducer);

export default store;

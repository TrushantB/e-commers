import { combineReducers } from 'redux';
import Product from './Product';
import Category from './Category';
import HandmadeCard from './HandmadeCard';
import Cart from './Cart';
import HomeReducer from './HomeReducer';
import {reducer as toastrReducer} from 'react-redux-toastr'
import CommonReducer from './CommonReducer';

export default combineReducers({
  toastr: toastrReducer,
  product:Product,
  category:Category,
  handmade:HandmadeCard,
  cart:Cart,
  home:HomeReducer,
  common:CommonReducer,

})

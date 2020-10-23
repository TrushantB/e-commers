import { combineReducers } from 'redux';
import Product from './Product';
import Category from './Category';
import HandmadeCard from './HandmadeCard';
import Cart from './Cart';

export default combineReducers({
  product:Product,
  category:Category,
  handmade:HandmadeCard,
  cart:Cart,
})

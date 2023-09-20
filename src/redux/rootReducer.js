import { combineReducers } from "redux";
import shoppingReducer from "./Shopping/shopping-reducer";
import jeweleryReducer from "./Shopping/jewelery-reducer";
import electronicsReducer from "./Shopping/electronics-reducer";
import menReducer from "./Shopping/men-reducer";
import womenReducer from "./Shopping/women-reducer";
import { authReducer } from "./Auth/auth.reducer";
import { userReducer } from "./user/user-reducer";
import categoryReducer from "./Shopping/category-reduces";
import { addressReducer } from "./address/address-reducer";
import selectProductreducer from "./search/select-product-reducer";
import categories from "./categories/categories";

const rootReducer = combineReducers({
  shop: shoppingReducer,
  jewelery: jeweleryReducer,
  electronics: electronicsReducer,
  men: menReducer,
  women: womenReducer,
  auth: authReducer,
  user: userReducer,
  category: categoryReducer,
  address: addressReducer,
  selectProduct: selectProductreducer,
  categories: categories
});

export default rootReducer;
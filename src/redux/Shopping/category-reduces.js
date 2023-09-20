import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      name: "Male Clothings",
      image:
        "https://images.unsplash.com/photo-1456725203480-0be828fcd7ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      createdAt: "2023-08-30T13:15:40.330Z",
      updatedAt: "2023-08-30T13:15:40.330Z",
    },
    {
      id: 2,
      name: "Female Clothings",
      image:
        "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVtYWxlJTIwY2xvdGhpbmdzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      createdAt: "2023-08-30T13:16:00.389Z",
      updatedAt: "2023-08-30T13:16:00.389Z",
    },
    {
      id: 3,
      name: "Electronics",
      image:"https://images.unsplash.com/photo-1579006318110-42d7992b6635?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80",
      createdAt: "2023-08-30T13:16:30.863Z",
      updatedAt: "2023-08-30T13:16:30.863Z",
    },
    {
      id: 4,
      name: "Jewelery",
      image:"https://images.unsplash.com/photo-1620893749736-346f4a8fe866?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      createdAt: "2023-08-30T13:16:54.261Z",
      updatedAt: "2023-08-30T13:16:54.261Z",
    },
    
  ],
  cart: [],
  currentItem: null,
};

const categoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Great Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default categoryReducer;

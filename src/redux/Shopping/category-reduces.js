import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      name: "Male Clothings",
      image:
        "https://media.istockphoto.com/id/1330548216/photo/asian-chinese-senior-tailor-man-with-facial-hair-looking-at-camera-smiling-in-atelier-studio.webp?b=1&s=170667a&w=0&k=20&c=MF4nzbrvjb1RDnv9XqvgWi7KfQ29LRYllev8X_c1Dgk=",
      createdAt: "2023-08-30T13:15:40.330Z",
      updatedAt: "2023-08-30T13:15:40.330Z",
    },
    {
      id: 2,
      name: "Female Clothings",
      image:
        "https://images.unsplash.com/photo-1541787457429-b1766a4766b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmVtYWxlJTIwY2xvdGh8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      createdAt: "2023-08-30T13:16:00.389Z",
      updatedAt: "2023-08-30T13:16:00.389Z",
    },
    {
      id: 3,
      name: "Electronics",
      image:"https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      createdAt: "2023-08-30T13:16:30.863Z",
      updatedAt: "2023-08-30T13:16:30.863Z",
    },
    {
      id: 4,
      name: "Jewelery",
      image:"https://images.unsplash.com/photo-1572545884955-6f3d7b6540a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGpld2VsZXJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
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

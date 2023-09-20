const initialState = {
    selectedProduct: null,
  };
  
  const selectProductreducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SELECT_PRODUCT':
        return {
          ...state,
          selectedProduct: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default selectProductreducer;
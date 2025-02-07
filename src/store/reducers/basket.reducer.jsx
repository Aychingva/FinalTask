export function basketReducer(state = [], action) {
    console.log('Action:', action);
    if (action.type === "ADD_TO_BASKET") {
      return [...state, action.payload];
    } else if (action.type === "REMOVE_FROM_BASKET") {
   
      return state.filter(item => item.id !== action.payload); // Should be !== to remove the item
    }
    else if (action.type === 'INCREASE_QUANTITY') {
        return state.map((item) =>
          item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else if (action.type === 'DECREASE_QUANTITY') {
        return state.map((item) =>
          item.id === action.payload && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
    }
    return state;
    
  }
 
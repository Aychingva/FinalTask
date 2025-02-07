export function favoriteReducers(state = [], action) {
    if (action.type === "ADD_TO_FAV") {
      return [...state, action.payload];
    } else if (action.type === "REMOVE_FROM_FAV") {
      // Filter out the product based on the ID
      return state.filter(item => item.id !== action.payload); // Should be !== to remove the item
    }
    return state;
  }
  
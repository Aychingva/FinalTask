export function addtobasketaction(payload){
    return {
        type: 'ADD_TO_BASKET',
        payload
    }
    
}

export function removetobasketaction(payload){
    return {
        type: 'REMOVE_FROM_BASKET',
        payload
    }
}

export const increaseQuantityAction = (id) => ({
    type: 'INCREASE_QUANTITY',
    payload: id,
  });
  
  export const decreaseQuantityAction = (id) => ({
    type: 'DECREASE_QUANTITY',
    payload: id,
  });
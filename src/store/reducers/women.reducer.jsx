
export function womenReducer(state = [], action) {
    if(action.type==="ADD_WOMEN_PRODUCTS"){
        return [...action.payload]
    }
    return state
}
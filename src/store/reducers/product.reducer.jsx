
export function productReducer(state = [], action) {
    if(action.type==="ADD_SALES_PRODUCTS"){
        return [...action.payload]
    }
    return state
}
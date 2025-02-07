export function BoysReducer(state = [], action) {
    if(action.type==="ADD_BOYS_PRODUCTS"){
        return [...action.payload]
    }
    return state
}
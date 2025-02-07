export function menReducer(state = [], action) {
    if(action.type==="ADD_MEN_PRODUCTS"){
        return [...action.payload]
    }
    return state
}
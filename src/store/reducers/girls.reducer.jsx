export function GirlsReducer(state = [], action) {
    if(action.type==="ADD_GIRLS_PRODUCTS"){
        return [...action.payload]
    }
    return state
}
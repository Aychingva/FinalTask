import { combineReducers, createStore } from "redux";
import { favoriteReducers } from "./reducers/fav.reducer";
import { productReducer } from "./reducers/product.reducer";
import { womenReducer } from "./reducers/women.reducer";
import { menReducer } from "./reducers/men.reducer";
import { GirlsReducer } from "./reducers/girls.reducer";
import { BoysReducer } from "./reducers/boys.reducer";
import { basketReducer } from "./reducers/basket.reducer";

const reducers=combineReducers({
    favlist:favoriteReducers,
    products:productReducer,
    women:womenReducer,
    men:menReducer,
    girls:GirlsReducer,
    boys:BoysReducer,
    basketlist:basketReducer
})

export const globalState=createStore(reducers)



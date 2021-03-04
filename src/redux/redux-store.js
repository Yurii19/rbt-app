import {combineReducers, createStore} from "redux";

import trainingReducer from "./training-reducer";
import articlesReducer from "./articles-reducer";
import sidebarReducer from "./sidebar-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers(
    {
        trainingData: trainingReducer,
        articlesData: articlesReducer,
        sidebarData: sidebarReducer,
        authData: authReducer,
    }
);

let store = createStore(reducers);

window.store = store;

export default store;
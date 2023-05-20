import { combineReducers, createStore } from "redux"
import uniReducer from "./reducers/uni-reducer"
import userReducer from "./reducers/user-reducer"

const rootReducer = combineReducers({ uniReducer, userReducer })

const store = createStore(rootReducer)

export default store
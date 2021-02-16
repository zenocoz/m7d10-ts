import {createStore, compose, combineReducers, applyMiddleware} from "redux"
import {infoReducer} from "../reducers/infoReducer"

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState = {
  info: object,
}

// const mainReducer = combineReducers({

//   info: infoReducer,
// })

export default function configureStore() {
  return createStore(
    infoReducer,
    initialState,
    composedEnhancer(applyMiddleware(thunk))
  )
}

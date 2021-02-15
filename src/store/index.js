import {createStore, compose, combineReducers, applyMiddleware} from "redux"
import {infoReducer} from "../reducers/infoReducer"
import {keywordReducer} from "../reducers/keywordReducer"

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState = {
  keyword: string(""),
  info: object,
}

const mainReducer = combineReducers({
  keyword: keywordReducer,
  info: infoReducer,
})

export default function configureStore() {
  return createStore(
    mainReducer,
    initialState,
    composedEnhancer(applyMiddleware(thunk))
  )
}

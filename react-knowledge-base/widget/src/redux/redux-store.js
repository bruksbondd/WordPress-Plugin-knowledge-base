import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import appReducer from "./appReducer";
import categoryReducer from "./categoryReducer";
import postsReducer from "./postsReducer";

const rootReducer = combineReducers({
  app: appReducer,
  category: categoryReducer,
  post: postsReducer
})

export default createStore(rootReducer, applyMiddleware(thunk))
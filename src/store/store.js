import { createStore, applyMiddleware,compose, combineReducers} from "redux";
import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer';
import {citaReducer} from '../reducers/citaReducer'
import { uiReducer } from '../reducers/uiReducer';
import {postReducer} from '../reducers/postReducer';


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducer = combineReducers({
  cita:citaReducer,
  auth: authReducer,
  ui: uiReducer,
  post:postReducer
})

export const store = createStore(
 reducer,
 composeEnhancers(
   applyMiddleware(thunk)
 )
);

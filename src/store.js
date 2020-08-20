import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import Reducer from './Reducer/Reducer'

const store = createStore(Reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
// src/redux/store.js
// codigo viejo o funciona
// import { createStore, applyMiddleware, compose } from 'redux';
// import rootReducer from './reducer';
// import { thunkMiddleware } from 'redux-thunk';

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//     rootReducer,
//     composeEnhancer(applyMiddleware(thunkMiddleware))
// );
// export default store;
import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export default store;

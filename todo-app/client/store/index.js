import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise'

import rootReducer from '../reducers'

export default function configure(initialState) {

  const createStoreWithMiddleware = applyMiddleware(
    thunk,
    promise
  )(createStore)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default;
      store.replaceReducer(nextReducer);
    });
  }

  return createStoreWithMiddleware(rootReducer, initialState);
}

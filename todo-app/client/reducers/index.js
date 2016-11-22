import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

import todos from './todosReducer'
import errors from './errorsReducer'

export default combineReducers({
  routing,
  todos,
  errors
})

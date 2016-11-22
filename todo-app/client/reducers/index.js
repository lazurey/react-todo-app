import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

import todos from './todosReducer'
import errors from './errorsReducer'
import status from './statusReducer'

export default combineReducers({
  routing,
  todos,
  errors,
  status
})

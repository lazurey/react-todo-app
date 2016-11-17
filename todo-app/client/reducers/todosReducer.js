import { handleActions } from 'redux-actions'

import { LOAD_TODOS } from '../actions/todos'

const TodosReduers = handleActions({
  [LOAD_TODOS]: (state = [], action) => [...state, ...action.payload]
}, [])

export default TodosReduers

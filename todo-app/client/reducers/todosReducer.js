import { handleActions } from 'redux-actions'

import { LOAD_TODOS, ADD_TODO } from '../actions/todos'
import { UPDATE_TODO, DELETE_TODO } from '../actions/todo'

const TodosReduers = handleActions({
  [LOAD_TODOS]: (state = [], action) => [...state, ...action.payload],
  [ADD_TODO]: (state = [], action) => [...state, action.payload],
  [UPDATE_TODO]: (state = [], { payload }) => state.map(
    item => ((item.id === payload.id) ? payload : item)),
  [DELETE_TODO]: (state = [], { payload }) => state.filter(item => item.id !== payload)
}, [])

export default TodosReduers

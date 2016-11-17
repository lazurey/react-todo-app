import { createAction } from 'redux-actions'

import api from '../api/todos'

export const LOAD_TODOS = 'load all todo items'

export const load = createAction(LOAD_TODOS, (dispatch) => api.load())

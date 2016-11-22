import { handleActions } from 'redux-actions'

import { EDIT_STATUS } from '../actions/status'

const StatusReduers = handleActions({
  [EDIT_STATUS]: (state = [], { payload }) => payload
}, {
  editing: false
})

export default StatusReduers

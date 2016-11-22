import { apiServer, formatResponse } from './'

export default {
  patch: (id, title) => fetch(`${apiServer}/todos/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: { title }
  })
  .then(formatResponse),
  delete: id => fetch(`${apiServer}/todos/${id}`, {
    method: 'DELETE'
  })
  .then(formatResponse)
}

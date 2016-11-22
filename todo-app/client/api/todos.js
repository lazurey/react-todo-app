import { apiServer, formatResponse } from './'

export default {
  load: () => fetch(`${apiServer}/todos`)
    .then(formatResponse),
  post: title => fetch(`${apiServer}/todos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title })
  })
  .then(formatResponse)
}

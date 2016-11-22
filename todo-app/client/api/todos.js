import { apiServer, formatResponse } from './'

export default {
  load: () => fetch(`${apiServer}/todos`)
    .then(formatResponse)
}

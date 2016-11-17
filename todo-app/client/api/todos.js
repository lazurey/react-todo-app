import { apiServer } from './'

export default {
  load: () => fetch(`${apiServer}/todos`)
    .then((response) => {
      if (response.status > 200) {
        throw new Error('error here')
      } else {
        try {
          return response.json()
        } catch (e) {
          return Promise.resolve({})
        }
      }
    })
}

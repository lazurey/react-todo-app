import { apiServer } from './'

export default {
  load: () => fetch(`${apiServer}/todos`)
    .then((response) => {
      let jsonResponse

      try {
        jsonResponse = response.json()
      } catch (err) {
        throw new Error('bad json format')
      }

      return jsonResponse.then((json) => {
        const { status } = response
        const { message } = json
        return Promise.resolve({
          status, message, data: json
        })
      })
    })
}

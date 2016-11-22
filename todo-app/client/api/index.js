let apiAddress

const BAD_JSON = 'bad json format'

/* istanbul ignore if */
if (global.location &&
  /* istanbul ignore next */
  global.location.origin) {
  apiAddress = global.location.origin
} else {
  apiAddress = 'http://localhost:3000'
}

/* istanbul ignore if */
if (process.env.NODE_ENV === 'production') {
  apiAddress = ''
}

apiAddress += '/api'

export const formatResponse = (response) => {
  let jsonResponse
  try {
    jsonResponse = response.json()
  } catch (err) {
    /* istanbul ignore next */
    throw new Error(BAD_JSON)
  }
  return jsonResponse.then((json) => {
    const { status } = response
    const { message } = json
    return Promise.resolve({
      status, message, data: json
    })
  })
}

export const apiServer = apiAddress

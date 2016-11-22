let apiAddress

/* istanbul ignore if */
if (global.location &&
  /* istanbul ignore next */
  global.location.origin) {
  apiAddress = global.location.origin
} else {
  apiAddress = 'http://localhost:3000'
}

apiAddress += '/api'

/* istanbul ignore if */
if (process.env.NODE_ENV === 'production') {
  apiAddress = 'http://localhost:8080'
}


export const formatResponse = (response) => {
  let jsonResponse

  try {
    jsonResponse = response.json()
  } catch (err) {
    /* istanbul ignore next */
    throw new Error('bad json format')
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

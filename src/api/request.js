import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8080/api'

let makePostRequest = (url, data, authorization, resultCall, errorCall) => {
  let instance = authorization !== null && authorization !== undefined
    ? axios.create({headers: {'Authorization': authorization}})
    : axios.create()

  instance.post(url, data)
    .then(function (response) {
      console.log('Error', response)
      resultCall(response)
    }).catch(function (response) {
    if (response instanceof Error) {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', response.response)
      errorCall(response.response)
    } else {
      // The request was made, but the server responded with a status code
      // that falls out of the range of 2xx
      console.log(response.data)
      console.log(response.status)
      console.log(response.headers)
      console.log(response.config)
      resultCall(response)
    }
  })
}

let makeGetRequest = (url, params, authorization, resultCall, errorCall) => {
  let instance = authorization !== null && authorization !== undefined
    ? axios.create({headers: {'Authorization': authorization}})
    : axios.create()

  instance.get(url, params)
    .then(function (response) {
      resultCall(response)
    }).catch(function (response) {
    if (response instanceof Error) {
      console.log('Error', response.response)
      errorCall(response.response)
    } else {
      console.log(response.data)
      console.log(response.status)
      console.log(response.headers)
      console.log(response.config)
      resultCall(response)
    }
  })
}

export {
  makePostRequest,
  makeGetRequest
}

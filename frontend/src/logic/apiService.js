import config from '../config'

let host = config.swapi.host

export default {
  fetchResource
}

async function fetchResource (endpoint, factory) {
  return fetch(`${host}/${endpoint}`)
    .then(response => response.json())
    .then(data => data.map(factory))
}

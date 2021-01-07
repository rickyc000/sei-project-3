import axios from 'axios'

const baseUrl = '/api'

export function getAllSpaces() {
  return axios.get(`${baseUrl}/spaces`)
}


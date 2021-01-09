import axios from 'axios'


const baseUrl = '/api'

//* SPACES Requests

export function getAllSpaces() {
  return axios.get(`${baseUrl}/spaces`)
}

// Show Single Space 

export function getSingleSpace(id) {
  return axios.get(`${baseUrl}/spaces/${id}`)
}

//* AUTH Requests

export function registerUser(formdata) {
  return axios.post(`${baseUrl}/register`, formdata)
}

export function loginUser(formdata) {
  return axios.post(`${baseUrl}/login`, formdata)
}

export default getAllSpaces

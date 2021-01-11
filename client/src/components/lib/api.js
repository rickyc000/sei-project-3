import axios from 'axios'
import { getToken, getUserId } from './auth'
const baseUrl = '/api'

export function headers() {
  return {
    headers: { authorization: `Bearer ${getToken()}` }
  }
}

//* SPACES Requests

export function getAllSpaces() {
  return axios.get(`${baseUrl}/spaces`)
}

// Show Single Space 

export function getSingleSpace(id) {
  return axios.get(`${baseUrl}/spaces/${id}`)
}

// Add to favourites

export function addToFavourites(id) {
  console.log(headers())
  return axios.post(`${baseUrl}/spaces/${id}/favourite`, null, headers())
}

// Get Current User Profile

export function getUserProfile() {
  console.log(headers())
  return axios.get(`${baseUrl}/profile/${getUserId()}`, headers())
}

export function getOtherUserProfile(id) {
  console.log(headers())
  return axios.get(`${baseUrl}/users/${id}`, headers())
}

//* AUTH Requests

export function registerUser(formdata) {
  return axios.post(`${baseUrl}/register`, formdata)
}

export function loginUser(formdata) {
  return axios.post(`${baseUrl}/login`, formdata)
}

export default getAllSpaces
